import {
  Cell,
  Engine,
  TileMap,
  Scene,
  Vector,
  SpriteSheet,
  TileSprite,
  vec,
  Actor,
  Color,
  ScreenElement,
  GameEvent,
  Label,
  Input,
  Util,
  Loader,
} from "excalibur";

import { Character, CharacterClass, Player, Enemy } from "./character";
import { AStarFinder, Finder, Grid } from "pathfinding";
import { GameOverResources, MusicResources, Resources } from "./resources";
import { generateLevel, levelLoader } from "./index";

export enum CellType {
  WALL,
  FLOOR,
  STAIR,
  NONE,
}

const CELL_TYPE_DATA = {
  [CellType.WALL]: {
    solid: true,
  },
  [CellType.FLOOR]: {
    solid: false,
  },
  [CellType.STAIR]: {
    solid: false,
  },
  [CellType.NONE]: {
    solid: true,
  },
};

type MapCell = {
  character?: Character;
};

export enum CharacterAlignment {
  PLAYER,
  ENEMY,
}

export type SpawnPoint = {
  alignment: CharacterAlignment;
  class: CharacterClass;
  spawnTile: Vector;
  exp?: number;
};

export function manhattanDistance(a: Vector, b: Vector) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export class Level extends Scene {
  public static readonly TILE_SIZE = 30;
  private static readonly CAMERA_SPEED = 200;
  private tilesheet: SpriteSheet;

  private engine: Engine;
  private enemies: Character[] = [];
  private players: Character[] = [];
  private terrain_data: CellType[][];
  private map_data: MapCell[][];
  private tilemap: TileMap;
  private path_finder: Finder;
  private stairLocation: Vector;

  private selectedPlayer?: Character;
  private moveOverlay: Actor[] = [];
  private attackOverlay: Actor[] = [];
  private nextTurnButton?: Actor;
  private statOverlay?: Actor;

  private tutorialOverlay?: Actor;
  private skipTutorialButton?: Actor;

  private depth: number;
  private level_depth_label: Label;

  public playerTurn: boolean;

  constructor(
    engine: Engine,
    terrain_data: CellType[][],
    spawnPoints: SpawnPoint[],
    depth: number,
    stairLocation: Vector
  ) {
    super(engine);

    this.depth = depth;
    this.level_depth_label = new Label();
    this.level_depth_label.fontSize = 25;
    this.level_depth_label.color = Color.White;
    this.level_depth_label.pos = new Vector(15, 40);
    this.level_depth_label.text = `Depth: ${depth}`;
    this.stairLocation = stairLocation;

    engine.backgroundColor = Color.Black;

    this.terrain_data = terrain_data;
    this.tilemap = new TileMap(
      0,
      0,
      Level.TILE_SIZE,
      Level.TILE_SIZE,
      terrain_data.length,
      terrain_data[0].length
    );
    this.map_data = new Array(this.terrain_data.length).fill(null).map(() =>
      Array.from({ length: this.terrain_data[0].length }, () => {
        return {
          character: undefined,
        };
      })
    );

    this.tilesheet = new SpriteSheet({
      image: Resources.TileTexture,
      spWidth: Level.TILE_SIZE,
      spHeight: Level.TILE_SIZE,
      rows: Resources.TileTexture.height / Level.TILE_SIZE,
      columns: Resources.TileTexture.width / Level.TILE_SIZE,
    });

    this.tilemap.registerSpriteSheet("tile", this.tilesheet);
    spawnPoints.forEach(this.spawnCharacter);
    this.engine = engine;

    this.path_finder = new AStarFinder();

    this.playerTurn = true;
  }

  private launchTutorial = () => {
    this.add(this.createSkipTutorialButton());

    const tutorialPlayerPos = this.players
      .slice()
      .sort((a, b) => a.pos.y - b.pos.y)[0].pos;

    this.camera.pos = tutorialPlayerPos.clone();

    const tutorialEnemyPos = this.enemies
      .slice()
      .sort(
        (a, b) =>
          manhattanDistance(a.pos, tutorialPlayerPos) -
          manhattanDistance(a.pos, tutorialPlayerPos)
      )[0].pos;

    this.showTutorialOverlay(
      [
        "Your characters have green healthbars",
        "Hover over characters to see their stats",
      ],
      tutorialPlayerPos,
      () => {
        this.showTutorialOverlay(
          ["Enemy characters have red healthbars"],
          tutorialEnemyPos,
          () => {
            this.showTutorialOverlay(
              [
                "Click on a player to see possible moves they can make",
                "",
                "Red squares highlight enemies you can attack this turn",
                "Orange and blue squares highlight places you can move to",
                "If you move to a blue square you will still be able to attack afterwards",
              ],
              tutorialPlayerPos,
              () => {
                this.showTutorialOverlay(
                  ["Click this button to end your turn"],
                  this.camera.pos.add(vec(270, 220)),
                  () => {
                    this.showTutorialOverlay(
                      ["Get to these stairs to move down to the next level"],
                      this.tileToPixelCoords(this.stairLocation),
                      () => {
                        this.showTutorialOverlay(
                          ["Use the WASD keys to pan the camera", "Have fun!"],
                          tutorialPlayerPos,
                          () => {
                            this.endTutorial();
                          }
                        );
                      }
                    );
                  },
                  false
                );
              }
            );
          }
        );
      }
    );
  };

  private showTutorialOverlay(
    tutorialText: string[],
    pos: Vector,
    onTutorialclick: () => void,
    jumpCameraToPos = true
  ) {
    if (this.tutorialOverlay) {
      this.tutorialOverlay?.off("pointerdown");
      this.tutorialOverlay?.kill();
    }

    this.tutorialOverlay = this.generateTextOverlay(
      [...tutorialText, "", "Click on this box to continue"],
      pos.clone()
    );

    this.tutorialOverlay.pos.subEqual(vec(0, this.tutorialOverlay.height));

    this.tutorialOverlay.on("pointerdown", onTutorialclick);
    this.add(this.tutorialOverlay);
    if (jumpCameraToPos) {
      this.camera.pos = pos.clone();
    }
  }

  private createSkipTutorialButton() {
    this.skipTutorialButton = new ScreenElement({
      x: 10,
      y: this.engine.drawHeight - 40,
      width: Resources.SkipTutorialTexture.width,
      height: 30,
    });

    const skipTutorialSheet = new SpriteSheet(
      Resources.SkipTutorialTexture,
      1,
      2,
      Resources.SkipTutorialTexture.width,
      30
    );

    this.skipTutorialButton.addDrawing(
      "normal",
      skipTutorialSheet.getSprite(0)
    );
    this.skipTutorialButton.addDrawing(
      "hovered",
      skipTutorialSheet.getSprite(1)
    );
    this.skipTutorialButton.setDrawing("normal");

    this.skipTutorialButton.on("pointerenter", () => {
      this.skipTutorialButton?.setDrawing("hovered");
    });

    this.skipTutorialButton.on("pointerleave", () => {
      this.skipTutorialButton?.setDrawing("normal");
    });

    this.skipTutorialButton.on("pointerdown", () => {
      if (this.tutorialOverlay) {
        this.endTutorial();
      }
    });

    return this.skipTutorialButton;
  }

  private endTutorial() {
    this.tutorialOverlay?.off("pointerdown");
    this.tutorialOverlay?.kill();
    this.skipTutorialButton?.off("pointerdown");
    this.skipTutorialButton?.kill();
  }

  get characters() {
    return [...this.enemies, ...this.players];
  }

  onInitialize(engine: Engine) {
    const depth_element = new ScreenElement({
      x: 0,
      y: 0,
    });
    depth_element.add(this.level_depth_label);
    engine.add(depth_element);
    engine.add(this.tilemap);
    this.characters.forEach((character: Character) => {
      engine.add(character);
    });
    this.syncTerrainData();

    this.nextTurnButton = new ScreenElement({
      x: engine.drawWidth - 100,
      y: engine.drawHeight - 40,
      width: 90,
      height: 30,
    });

    const nextTurnSheet = new SpriteSheet(
      Resources.NextTurnTexture,
      1,
      2,
      90,
      30
    );
    this.nextTurnButton.addDrawing("normal", nextTurnSheet.getSprite(0));
    this.nextTurnButton.addDrawing("hovered", nextTurnSheet.getSprite(1));
    this.nextTurnButton.setDrawing("normal");

    this.nextTurnButton.on("pointerenter", () => {
      this.nextTurnButton?.setDrawing("hovered");
    });

    this.nextTurnButton.on("pointerleave", () => {
      this.nextTurnButton?.setDrawing("normal");
    });

    this.nextTurnButton.on("pointerdown", this.nextTurnButtonClick);

    this.add(this.nextTurnButton);

    this.engine.input.pointers.primary.on("down", this.onClick);
    this.engine.input.keyboard.on("press", (evt) => {
      switch (evt.key) {
        case Input.Keys.A:
          this.camera.vel.x = -Level.CAMERA_SPEED;
          break;
        case Input.Keys.D:
          this.camera.vel.x = Level.CAMERA_SPEED;
          break;
        case Input.Keys.W:
          this.camera.vel.y = -Level.CAMERA_SPEED;
          break;
        case Input.Keys.S:
          this.camera.vel.y = Level.CAMERA_SPEED;
          break;
      }
    });

    this.engine.input.keyboard.on("release", (evt) => {
      switch (evt.key) {
        case Input.Keys.A:
        case Input.Keys.D:
          this.camera.vel.x = 0;
          break;
        case Input.Keys.W:
        case Input.Keys.S:
          this.camera.vel.y = 0;
          break;
      }
    });

    if (this.depth == 1) {
      this.launchTutorial();
    }
  }

  private onClick = (evt: Input.PointerDownEvent) => {
    if (!this.playerTurn) {
      return;
    }

    const clickedOnCharacter = this.characters.find((character) =>
      character.contains(evt.pos.x, evt.pos.y)
    );

    if (clickedOnCharacter) {
      if (evt.button == Input.PointerButton.Right) {
      }
    }
  };

  private generateTextOverlay = (lines: string[], pos: Vector) => {
    const overlayHeight = (Level.TILE_SIZE * lines.length) / 2 + 5;

    const labels: Label[] = lines.map(
      (line, i) =>
        new Label({
          text: line,
          color: Color.White,
          x: 2,
          y: 15 * (i + 1) - overlayHeight / 2,
        })
    );

    const overlayWidth =
      labels
        .map((label) => label.getTextWidth(this.engine.ctx))
        .sort((a, b) => a - b)
        .pop()! + 4;

    labels.forEach((label) => (label.pos.x -= overlayWidth / 2));

    const overlayBg = new Actor({
      x: pos.x,
      y: pos.y,
      width: overlayWidth + 2,
      height: overlayHeight + 2,
      color: Color.White,
    });

    const overlay = new Actor({
      x: 0,
      y: 0,
      width: overlayWidth + 1,
      height: overlayHeight,
      color: Color.Black,
    });

    labels.forEach((overlayText) => overlay.add(overlayText));

    overlayBg.add(overlay);
    return overlayBg;
  };

  syncTerrainData() {
    this.tilemap.data.forEach((cell: Cell, i) => {
      cell.clearSprites();
      const y = Math.floor(i / this.tilemap.cols);
      const x = i % this.tilemap.cols;
      switch (this.terrain_data[x][y]) {
        case CellType.WALL:
          cell.solid = CELL_TYPE_DATA[CellType.WALL].solid;
          let tileNum = 0;
          if (
            this.terrain_data[x][y + 1] &&
            this.terrain_data[x][y + 1] == CellType.FLOOR
          ) {
            tileNum = 1;
          }
          cell.pushSprite(new TileSprite("tile", tileNum));
          break;
        case CellType.FLOOR:
          cell.solid = CELL_TYPE_DATA[CellType.FLOOR].solid;
          const floorTiles = [2, 4, 5, 6, 7, 8];
          tileNum = floorTiles[Math.floor(Math.random() * floorTiles.length)];
          cell.pushSprite(new TileSprite("tile", tileNum));
          break;
        case CellType.STAIR:
          cell.solid = CELL_TYPE_DATA[CellType.STAIR].solid;
          cell.pushSprite(new TileSprite("tile", 3));
          break;
        case CellType.NONE:
          cell.solid = CELL_TYPE_DATA[CellType.NONE].solid;
          cell.pushSprite(new TileSprite("tile", 0));
          break;
      }
    });
  }

  private moveCharacter = (
    oldPos: Vector,
    newPos: Vector,
    character: Character
  ) => {
    console.log(`moving character ${character.id}`);
    const path = this.pathfind(oldPos, newPos).map(this.tileToPixelCoords);
    this.map_data[oldPos.x][oldPos.y].character = undefined;
    this.map_data[newPos.x][newPos.y].character = character;
    return character.goTo(path).then(() => {
      if (
        character.controllable &&
        this.terrain_data[newPos.x][newPos.y] == CellType.STAIR
      ) {
        console.log("Exit Level!");
        const nextLevel = generateLevel(
          this.engine,
          this.depth + 1,
          this.players.map((player) => {
            return { class: player.cClass, exp: player.exp };
          })
        );
        this.goToLevel(nextLevel);
      }
    });
  };

  private goToLevel(nextLevel: Scene) {
    this.engine.input.pointers.primary.off("down", this.onClick);
    this.engine.add("test_level", nextLevel);
    this.engine.goToScene("test_level");
  }

  public pathfind(from: Vector, to: Vector): Vector[] {
    let path_matrix: number[][] = [];
    for (let i = 0; i < this.terrain_data.length; i++) {
      path_matrix.push([]);
      for (let j = 0; j < this.terrain_data[i].length; j++) {
        if (
          CELL_TYPE_DATA[this.terrain_data[j][i]].solid ||
          (this.map_data[j][i].character &&
            !(from.x == j && from.y == i) &&
            !(to.x == j && to.y == i))
        ) {
          path_matrix[i].push(1);
        } else {
          path_matrix[i].push(0);
        }
      }
    }
    return this.path_finder
      .findPath(from.x, from.y, to.x, to.y, new Grid(path_matrix))
      .map((step) => new Vector(step[0], step[1]));
  }

  public tileToPixelCoords = (tileCoords: Vector) => {
    return tileCoords
      .sub(vec(this.tilemap.x, this.tilemap.y))
      .scale(Level.TILE_SIZE)
      .add(Vector.One.scale(Level.TILE_SIZE / 2));
  };

  public pixelToTileCoords(pixelCoords: Vector): Vector {
    const tileCoords = pixelCoords
      .sub(Vector.One.scale(Level.TILE_SIZE / 2))
      .scale(1 / Level.TILE_SIZE)
      .add(vec(this.tilemap.x, this.tilemap.y));

    return vec(Math.floor(tileCoords.x), Math.floor(tileCoords.y));
  }

  private spawnCharacter = (spawnPoint: SpawnPoint) => {
    const pixelCoords = this.tileToPixelCoords(spawnPoint.spawnTile);

    let spawnedCharacter!: Character;
    switch (spawnPoint.alignment) {
      case CharacterAlignment.PLAYER:
        spawnedCharacter = new Player(
          pixelCoords,
          spawnPoint.class,
          spawnPoint.exp
        );
        break;
      case CharacterAlignment.ENEMY:
        spawnedCharacter = new Enemy(
          pixelCoords,
          spawnPoint.class,
          spawnPoint.exp
        );
        break;
    }

    if (spawnedCharacter.controllable) {
      spawnedCharacter.on("pointerup", () => {
        if (
          this.selectedPlayer &&
          this.selectedPlayer.id == spawnedCharacter.id
        ) {
          this.deselectPlayer();
          MusicResources.Deselect.play();
        } else {
          if (this.selectedPlayer) {
            this.deselectPlayer();
          }
          this.selectPlayer(spawnedCharacter);
          if (this.statOverlay) {
            this.createStatOverlay(spawnedCharacter);
          }
        }
      });

      this.players.push(spawnedCharacter);
    } else {
      this.enemies.push(spawnedCharacter);
    }

    // stat overlay generation
    let myStatOverlay: Actor | undefined;
    spawnedCharacter.onPostUpdate = () => {
      if (
        !myStatOverlay &&
        this.engine.input.pointers.primary.checkActorUnderPointer(
          spawnedCharacter
        )
      ) {
        this.createStatOverlay(spawnedCharacter);
        myStatOverlay = this.statOverlay;
      }

      if (
        myStatOverlay &&
        !this.engine.input.pointers.primary.checkActorUnderPointer(
          spawnedCharacter
        )
      ) {
        if (this.statOverlay) {
          this.statOverlay.kill();
        }
        this.statOverlay = undefined;
        myStatOverlay = undefined;
      }
    };

    this.map_data[spawnPoint.spawnTile.x][
      spawnPoint.spawnTile.y
    ].character = spawnedCharacter;

    return spawnedCharacter;
  };

  private selectPlayer = (player: Character) => {
    MusicResources.Select.play();
    this.generateOverlay(player);
    this.selectedPlayer = player;
  };

  private getPossibleMoves = (
    character: Character,
    potentialEnemies: Character[]
  ): {
    innerMoves: Vector[];
    allMoves: Vector[];
    attackableEnemies: { enemyPos: Vector; enemy: Character }[];
  } => {
    const characterPos = this.pixelToTileCoords(character.pos);
    const attackRange = character.cClass.attack.range;

    const possibleDestinations = this.getTilesWithinDist(
      characterPos,
      (character.moveExhausted.inner ? 0 : character.cClass.moveRange.inner) +
        (character.moveExhausted.outer ? 0 : character.cClass.moveRange.outer)
    );

    let placesToAttackFrom: Vector[] = [];
    if (!character.moveExhausted.inner) {
      placesToAttackFrom = this.getTilesWithinDist(
        characterPos,
        character.cClass.moveRange.inner
      );
    }
    if (!character.moveExhausted.outer) {
      placesToAttackFrom.push(characterPos);
    }

    const enemiesInRange: { enemy: Character; enemyPos: Vector }[] = [];

    if (!character.moveExhausted.outer) {
      potentialEnemies
        .map((enemy) => {
          return {
            enemy,
            enemyPos: this.pixelToTileCoords(enemy.pos),
          };
        })
        .filter(({ enemyPos }) =>
          placesToAttackFrom.some(
            (pos) => manhattanDistance(enemyPos, pos) <= attackRange
          )
        )
        .forEach((x) => enemiesInRange.push(x));
    }

    return {
      innerMoves: placesToAttackFrom,
      allMoves: possibleDestinations,
      attackableEnemies: enemiesInRange,
    };
  };

  private attack = (attacker: Character, victim: Character) => {
    attacker.setDrawing("atk");

    attacker.currentDrawing.flipHorizontal = victim.pos.x < attacker.pos.x;

    setTimeout(() => {
      attacker.setDrawing("idle");
    }, 1000);

    const victimDead = victim.damage(attacker.cClass.attack);

    if (victimDead) {
      let overlayMessage = attacker.gainExp(victim.cClass.deathExp());
      if (overlayMessage) {
        let actor = this.generateTextOverlay(
          overlayMessage,
          attacker.pos.add(vec(2.75 * Level.TILE_SIZE, 0))
        );
        this.engine.add(actor);
        actor.on("pointerdown", (evt) => {
          actor.kill();
        });
      }
      const victimPos = this.pixelToTileCoords(victim.pos);
      this.players = this.players.filter((player) => player.id != victim.id);
      this.enemies = this.enemies.filter((player) => player.id != victim.id);

      this.map_data[victimPos.x][victimPos.y].character = undefined;

      if (this.players.length <= 0) {
        console.log("Game over!");

        this.gameOver();
      }
    }

    attacker.spendAttack();
    console.log(
      `${attacker.id} attacking ${victim.id} at ${this.pixelToTileCoords(
        victim.pos
      )}, its health is now ${victim.health}`
    );
  };

  private moveToThenAttack = (
    attacker: Character,
    victim: Character,
    victimPos: Vector,
    possibleMoves: Vector[]
  ) => {
    const attackerPos = this.pixelToTileCoords(attacker.pos);

    let attackFrom = this.getAttackStagingPoint(
      attackerPos,
      victimPos,
      attacker,
      possibleMoves
    );

    return this.moveCharacter(attackerPos, attackFrom, attacker).then(() =>
      this.attack(attacker, victim)
    );
  };

  private generateOverlay = (player: Character) => {
    const possibleMoves = this.getPossibleMoves(player, this.enemies);

    function inInnerMove(o: Vector): boolean {
      return possibleMoves.innerMoves.some((p) => p.equals(o));
    }

    this.moveOverlay = possibleMoves.allMoves.map((point) => {
      const overlayPos = this.tileToPixelCoords(point);
      const tile = new Actor({
        x: overlayPos.x + 2,
        y: overlayPos.y + 2,
        width: Level.TILE_SIZE - 4,
        height: Level.TILE_SIZE - 4,
        color: inInnerMove(point) ? Color.Blue : Color.Orange,
        opacity: 0.5,
      });

      tile.on("pointerdown", (evt) => {
        if (evt.button != Input.PointerButton.Left) {
          return;
        }
        if (this.selectedPlayer && this.selectedPlayer.controllable) {
          // we have player selected
          const src = this.pixelToTileCoords(this.selectedPlayer.pos);
          this.moveCharacter(src, point, this.selectedPlayer);
          this.deselectPlayer();
        }
      });

      tile.onPostDraw = (ctx, _delta) => {
        if (this.engine.input.pointers.primary.isActorAliveUnderPointer(tile)) {
          const playerPos = this.pixelToTileCoords(player.pos);

          const path = this.pathfind(playerPos, point)
            .map(this.tileToPixelCoords)
            .map((pt) => pt.sub(tile.pos));

          for (let i = 0; i < path.length - 1; i++) {
            Util.DrawUtil.line(
              ctx,
              Color.White,
              path[i].x,
              path[i].y,
              path[i + 1].x,
              path[i + 1].y,
              5
            );
          }
        }
      };
      this.add(tile);
      return tile;
    });

    this.attackOverlay = possibleMoves.attackableEnemies.map(
      ({ enemy, enemyPos }) => {
        const overlayPos = this.tileToPixelCoords(enemyPos);
        const tile = new Actor({
          x: overlayPos.x + 2,
          y: overlayPos.y + 2,
          width: Level.TILE_SIZE - 4,
          height: Level.TILE_SIZE - 4,
          color: Color.Red,
          opacity: 0.5,
        });

        tile.on("pointerdown", (evt) => {
          if (evt.button != Input.PointerButton.Left) {
            return;
          }
          if (this.selectedPlayer && this.selectedPlayer.controllable) {
            // we have player selected
            this.moveToThenAttack(
              this.selectedPlayer,
              enemy,
              enemyPos,
              possibleMoves.innerMoves
            );
            this.deselectPlayer();
          }
        });

        tile.onPostDraw = (ctx, delta) => {
          if (
            this.engine.input.pointers.primary.isActorAliveUnderPointer(tile)
          ) {
            const playerPos = this.pixelToTileCoords(player.pos);

            const stagingPoint = this.getAttackStagingPoint(
              playerPos,
              enemyPos,
              player,
              possibleMoves.innerMoves
            );

            const path = this.pathfind(playerPos, stagingPoint)
              .map(this.tileToPixelCoords)
              .map((pt) => pt.sub(tile.pos));

            for (let i = 0; i < path.length - 1; i++) {
              Util.DrawUtil.line(
                ctx,
                Color.White,
                path[i].x,
                path[i].y,
                path[i + 1].x,
                path[i + 1].y,
                5
              );
            }
          }
        };

        this.add(tile);

        return tile;
      }
    );
  };

  private getTilesWithinDist = (pos: Vector, dist: number): Vector[] => {
    if (dist <= 0) {
      return [];
    }
    let ret = new Array<{ point: Vector; dist: number }>();
    let toGo = new Array<{ point: Vector; dist: number }>();

    const candidateDirections = [
      Vector.Up,
      Vector.Down,
      Vector.Left,
      Vector.Right,
    ];

    toGo.push({ point: pos, dist });

    while (toGo.length > 0) {
      const curr = toGo.shift()!;
      ret.push(curr);

      if (curr.dist == 0) {
        continue;
      }

      const candidatePoints = candidateDirections
        .map((point) => curr.point.add(point))
        .filter(
          (point) =>
            !CELL_TYPE_DATA[this.terrain_data[point.x][point.y]].solid &&
            !this.map_data[point.x][point.y].character
        )
        .filter((point) => !ret.some((pt) => pt.point.equals(point)))
        .filter((point) => !toGo.some((pt) => pt.point.equals(point)));

      candidatePoints.forEach((point) => {
        toGo.push({ point, dist: curr.dist - 1 });
      });
    }

    ret.shift(); // remove origin

    return ret.map((point) => point.point);
  };

  private deselectPlayer = () => {
    this.moveOverlay.forEach((actor) => {
      actor.off("pointerdown");
      actor.enableCapturePointer = false;
      actor.kill();
    });
    this.moveOverlay = [];

    this.attackOverlay.forEach((actor) => {
      actor.off("pointerdown");
      actor.enableCapturePointer = false;
      actor.kill();
    });
    this.attackOverlay = [];
    this.selectedPlayer = undefined;
  };

  private nextTurnButtonClick = (evt: GameEvent<Actor, Actor>) => {
    let event = evt as Input.PointerDownEvent;
    console.log(`next turn button clicked!`);
    if (this.nextTurnButton!.contains(event.screenPos.x, event.screenPos.y)) {
      this.nextTurn();
    }
  };

  public nextTurn = () => {
    if (this.playerTurn) {
      this.deselectPlayer();
    }
    this.playerTurn = !this.playerTurn;
    console.log(`next turn: ${this.playerTurn ? "player" : "enemy"}`);

    if (this.playerTurn) {
      this.players.forEach((player) => player.nextTurn());
      this.nextTurnButton!.visible = true;
      this.nextTurnButton!.on("pointerdown", this.nextTurnButtonClick);
    } else {
      this.nextTurnButton!.visible = false;
      this.nextTurnButton!.off("pointerdown");
      this.enemyTurn();
      this.enemies.forEach((enemy) => enemy.nextTurn());
    }

    console.log(`finshed nextTurn function`);
  };

  private enemyTurn = () => {
    let i = 0;

    const enemiesToMove = this.enemies
      .slice()
      .filter((enemy) =>
        this.players.some(
          (player) =>
            manhattanDistance(player.pos, enemy.pos) < 10 * Level.TILE_SIZE
        )
      );

    console.log(`moving ${enemiesToMove.length} this turn`);

    const calculateNextEnemyMove = () => {
      console.log(`moving enemy #${i + 1}`);
      if (i < enemiesToMove.length) {
        this.calculateEnemyMove(enemiesToMove[i]).then(calculateNextEnemyMove);
        i++;
      } else {
        this.nextTurn();
      }
    };
    calculateNextEnemyMove();
  };

  private calculateEnemyMove = (me: Character) => {
    const myPos = this.pixelToTileCoords(me.pos);

    const { innerMoves, allMoves, attackableEnemies } = this.getPossibleMoves(
      me,
      this.players
    );

    if (attackableEnemies.length > 0) {
      const closestPlayer = attackableEnemies.sort(
        (playerA, playerB) =>
          manhattanDistance(playerA.enemyPos, myPos) -
          manhattanDistance(playerB.enemyPos, myPos)
      )[0];
      return this.moveToThenAttack(
        me,
        closestPlayer.enemy,
        closestPlayer.enemyPos,
        innerMoves
      );
    }

    let potentialTargets = this.players.map((player) => {
      return {
        player,
        playerPos: this.pixelToTileCoords(player.pos),
      };
    });

    potentialTargets.sort(
      (playerA, playerB) =>
        manhattanDistance(playerA.playerPos, myPos) -
        manhattanDistance(playerB.playerPos, myPos)
    );

    for (let closestPlayer of potentialTargets) {
      allMoves.sort(
        (a, b) =>
          manhattanDistance(a, closestPlayer.playerPos) -
          manhattanDistance(b, closestPlayer.playerPos)
      );
      if (allMoves[0]) {
        const pathToPlayer = this.pathfind(myPos, allMoves[0]);
        const moveDistance =
          me.cClass.moveRange.inner + me.cClass.moveRange.outer;
        const moveTo = pathToPlayer[moveDistance];
        if (moveTo) {
          return this.moveCharacter(myPos, moveTo, me);
        }
      }
    }

    return this.moveCharacter(myPos, myPos, me);
  };

  private gameOver() {
    const gameOverLoader = new Loader();
    for (let key in GameOverResources) {
      gameOverLoader.addResource(GameOverResources[key]);
    }
    gameOverLoader.suppressPlayButton = true;
    gameOverLoader.logo = "";
    gameOverLoader.backgroundColor = "black";

    const endCard = new Actor({
      x: 360,
      y: 240,
      width: 720,
      height: 480,
    });
    endCard.addDrawing("title", GameOverResources.end.asSprite());

    endCard.on("pointerdown", () => {
      endCard.off("pointerdown");
      this.engine.add("level_1", generateLevel(this.engine, 1));
      this.engine.goToScene("level_1");
    });

    const clickText = new Label("Click Anywhere to Try Again");
    clickText.fontSize = 20;
    clickText.fontFamily = "serif";
    clickText.color = Color.White;
    clickText.pos = vec(
      360 - clickText.getTextWidth(this.engine.ctx) / 2,
      480 - (20 + 10)
    );

    clickText.actions.blink(500, 500).repeatForever();

    const gameOver = new Scene(this.engine);

    gameOver.add(endCard);
    gameOver.add(clickText);

    this.engine.start(gameOverLoader).then(() => {
      this.goToLevel(gameOver);
    });
  }

  private getAttackStagingPoint(
    attackerPos: Vector,
    victimPos: Vector,
    attacker: Character,
    possibleMoves: Vector[]
  ) {
    let attackFrom = attackerPos;

    if (
      manhattanDistance(victimPos, attackerPos) != attacker.cClass.attack.range
    ) {
      attackFrom = possibleMoves
        .filter(
          (pt) =>
            manhattanDistance(pt, victimPos) <= attacker.cClass.attack.range
        )
        .sort((a, b) => {
          return (
            manhattanDistance(a, attackerPos) -
            manhattanDistance(b, attackerPos)
          );
        })
        .shift()!;
    }
    return attackFrom;
  }

  private createStatOverlay(spawnedCharacter: Character) {
    if (this.statOverlay) {
      this.statOverlay.kill();
    }

    this.statOverlay = this.generateTextOverlay(
      spawnedCharacter.getStats(),
      spawnedCharacter.pos.add(vec(1.75 * Level.TILE_SIZE, 0))
    );

    this.add(this.statOverlay);
  }
}
