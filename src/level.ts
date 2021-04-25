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
} from "excalibur";

import { Bow, Character, Magic, Sword } from "./player";
import { AStarFinder, Finder, Grid } from "pathfinding";
import { Resources } from "./resources";
import {
  PointerButton,
  PointerDownEvent,
} from "excalibur/dist/Input/PointerEvents";
import { generateLevel } from "./index";

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

export enum CharacterClass {
  SWORD,
  BOW,
  MAGIC,
}

export type SpawnPoint = {
  alignment: CharacterAlignment;
  class: CharacterClass;
  spawnTile: Vector;
};

export function manhattanDistance(a: Vector, b: Vector) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export class Level extends Scene {
  public static readonly TILE_SIZE = 30;
  private tilesheet: SpriteSheet;

  private engine: Engine;
  private enemies: Character[] = [];
  private players: Character[] = [];
  private terrain_data: CellType[][];
  private map_data: MapCell[][];
  private tilemap: TileMap;
  private path_finder: Finder;

  private selectedPlayer?: Character;
  private moveOverlay: Actor[] = [];
  private attackOverlay: Actor[] = [];
  private nextTurnButton?: Actor;

  public playerTurn: boolean;

  constructor(
    engine: Engine,
    terrain_data: CellType[][],
    spawnPoints: SpawnPoint[]
  ) {
    super(engine);

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

  get characters() {
    return [...this.enemies, ...this.players];
  }

  onInitialize(engine: Engine) {
    engine.add(this.tilemap);
    this.characters.forEach((character: Character) => {
      engine.add(character);
    });
    this.syncTerrainData();

    this.nextTurnButton = new ScreenElement({
      x: engine.drawWidth - 100,
      y: engine.drawHeight - 100,
      width: 50,
      height: 50,
      color: Color.Green,
    });

    this.nextTurnButton.on("pointerdown", this.nextTurnButtonClick);

    this.add(this.nextTurnButton);

    this.engine.input.pointers.primary.on("down", this.onClick);
  }

  private onClick = (evt: PointerDownEvent) => {
    if (evt.button == PointerButton.Right) {
      this.engine.input.pointers.primary.on("move", (evt) => {
        this.camera.pos.addEqual(
          new Vector(-evt.ev.movementX, -evt.ev.movementY)
        );
      });

      this.engine.input.pointers.primary.on("up", (evt) => {
        if (evt.button == PointerButton.Right) {
          this.engine.input.pointers.primary.off("move");
          this.engine.input.pointers.primary.off("up");
        }
      });

      return;
    }

    if (!this.playerTurn) {
      return;
    }

    const clickedOnCharacter = this.characters.find((character) =>
      character.contains(evt.pos.x, evt.pos.y)
    );

    if (clickedOnCharacter) {
      if (clickedOnCharacter.isControllable()) {
        if (
          this.selectedPlayer &&
          this.selectedPlayer.id == clickedOnCharacter.id
        ) {
          this.deselectPlayer();
        } else {
          if (this.selectedPlayer) {
            this.deselectPlayer();
          }
          this.selectPlayer(clickedOnCharacter);
        }
      }
    } else {
      let coords = this.pixelToTileCoords(evt.pos);
      console.log(coords, this.terrain_data[coords.y][coords.x]);
    }
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
          cell.pushSprite(new TileSprite("tile", 2));
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
    character.spendEnergy(character.moveCost() * (path.length - 1));
    return character.goTo(path).then(() => {
      if (
        character.isControllable() &&
        this.terrain_data[newPos.x][newPos.y] == CellType.STAIR
      ) {
        console.log("Exit Level!");
        this.engine.input.pointers.primary.off("up");
        this.engine.input.pointers.primary.off("down", this.onClick);
        this.engine.input.pointers.primary.off("move");
        this.engine.add("test_level", generateLevel(this.engine));
        this.engine.goToScene("test_level");
      }
    });
  };

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

    const controllable = spawnPoint.alignment == CharacterAlignment.PLAYER;

    let spawnedCharacter;

    switch (spawnPoint.class) {
      case CharacterClass.SWORD:
        spawnedCharacter = new Sword(pixelCoords, controllable);
        break;
      case CharacterClass.BOW:
        spawnedCharacter = new Bow(pixelCoords, controllable);
        break;
      case CharacterClass.MAGIC:
        spawnedCharacter = new Magic(pixelCoords, controllable);
        break;
    }

    if (controllable) {
      this.players.push(spawnedCharacter);
    } else {
      this.enemies.push(spawnedCharacter);
    }

    this.map_data[spawnPoint.spawnTile.x][
      spawnPoint.spawnTile.y
    ].character = spawnedCharacter;

    return spawnedCharacter;
  };

  private selectPlayer = (player: Character) => {
    this.generateOverlay(player);
    this.selectedPlayer = player;
  };

  private getPossibleMoves = (
    character: Character,
    potentialEnemies: Character[]
  ): {
    moves: Vector[];
    attackableEnemies: { enemyPos: Vector; enemy: Character }[];
  } => {
    const characterPos = this.pixelToTileCoords(character.pos);
    const energyBudget = character.getEnergy();
    const attackCost = character.attackCost();
    const moveCost = character.moveCost();
    const attackRange = character.attackRange();

    const moveDistance = Math.floor(energyBudget / moveCost);

    const possibleDestinations = this.getTilesWithinDist(
      characterPos,
      moveDistance
    );

    const placesToAttackFrom = this.getTilesWithinDist(
      characterPos,
      Math.floor((energyBudget - attackCost) / moveCost)
    );

    const enemiesInRange = potentialEnemies
      .map((enemy) => {
        return {
          enemy,
          enemyPos: this.pixelToTileCoords(enemy.pos),
        };
      })
      .filter(({ enemyPos }) =>
        placesToAttackFrom.some(
          (pos) => manhattanDistance(enemyPos, pos) == attackRange
        )
      );
    return {
      moves: possibleDestinations,
      attackableEnemies: enemiesInRange,
    };
  };

  private attack = (attacker: Character, victim: Character) => {
    attacker.setDrawing("atk");

    attacker.currentDrawing.flipHorizontal = victim.pos.x < attacker.pos.x;

    setTimeout(() => {
      attacker.setDrawing("idle");
    }, 1000);

    const victimDead = victim.damage(attacker.attackDamage());

    if (victimDead) {
      const victimPos = this.pixelToTileCoords(victim.pos);
      this.players = this.players.filter((player) => player.id != victim.id);
      this.enemies = this.enemies.filter((player) => player.id != victim.id);

      this.map_data[victimPos.x][victimPos.y].character = undefined;
    }

    attacker.spendEnergy(attacker.attackCost());
    console.log(
      `${attacker.id} attacking ${victim.id} at ${this.pixelToTileCoords(
        victim.pos
      )}, its health is now ${victim.getHealth()}`
    );
  };

  private moveToThenAttack = (
    attacker: Character,
    victim: Character,
    victimPos: Vector
  ) => {
    const attackerPos = this.pixelToTileCoords(attacker.pos);

    let attackFrom = attackerPos;

    if (manhattanDistance(victimPos, attackerPos) != attacker.attackRange()) {
      attackFrom = this.getTilesAtExactlyDistance(
        victimPos,
        attacker.attackRange()
      )
        .map((point) => ({
          point,
          dist: this.pathfind(attackerPos, point).length,
        }))
        .sort((a, b) => a.dist - b.dist)
        .map(({ point }) => point)
        .shift()!;
      console.log(
        `character ${attacker.id} is currently at ${attackerPos}, moving to ${attackFrom} to attack victim at ${victimPos}`
      );
    }

    return this.moveCharacter(attackerPos, attackFrom, attacker).then(() =>
      this.attack(attacker, victim)
    );
  };

  private getTilesAtExactlyDistance = (pos: Vector, dist: number) => {
    const ret: Vector[] = [];
    for (let i = 0; i <= dist; i++) {
      let j = dist - i;
      const offsets = [vec(i, j)];
      if (i != 0) {
        vec(-i, j);
      }
      if (j != 0) {
        vec(i, -j);
      }
      if (i != 0 && j != 0) {
        offsets.push(vec(-i, -j));
      }
      offsets
        .map((pt) => pt.add(pos))
        .filter(({ x, y }) => x >= 0 && y >= 0)
        .filter(
          (point) =>
            !CELL_TYPE_DATA[this.terrain_data[point.x][point.y]].solid &&
            !this.map_data[point.x][point.y].character
        )
        .forEach((pt) => ret.push(pt));
    }
    return ret;
  };

  private generateOverlay = (player: Sword) => {
    const possibleMoves = this.getPossibleMoves(player, this.enemies);

    this.moveOverlay = possibleMoves.moves.map((point) => {
      const overlayPos = this.tileToPixelCoords(point);
      const tile = new Actor({
        x: overlayPos.x,
        y: overlayPos.y,
        width: Level.TILE_SIZE,
        height: Level.TILE_SIZE,
        color: Color.Blue,
        opacity: 0.5,
      });

      const tileSelect = () =>
        tile.on("pointerdown", (evt) => {
          if (this.selectedPlayer && this.selectedPlayer.isControllable()) {
            // we have player selected
            const src = this.pixelToTileCoords(this.selectedPlayer.pos);
            this.moveCharacter(src, point, this.selectedPlayer).then(() => {});
            this.deselectPlayer();
          }

          this.engine.input.pointers.primary.off("up", tileSelect);
        });

      this.engine.input.pointers.primary.on("up", tileSelect);

      this.add(tile);
      return tile;
    });

    this.attackOverlay = possibleMoves.attackableEnemies.map(
      ({ enemy, enemyPos }) => {
        const overlayPos = this.tileToPixelCoords(enemyPos);
        const tile = new Actor({
          x: overlayPos.x,
          y: overlayPos.y,
          width: Level.TILE_SIZE,
          height: Level.TILE_SIZE,
          color: Color.Red,
          opacity: 0.5,
        });

        tile.on("pointerdown", (evt) => {
          if (this.selectedPlayer && this.selectedPlayer.isControllable()) {
            // we have player selected
            this.moveToThenAttack(this.selectedPlayer, enemy, enemyPos);
            this.deselectPlayer();
          }
        });

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
    let event = evt as PointerDownEvent;
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
      this.players.forEach((player) => player.restoreEnergy());
      this.nextTurnButton!.visible = true;
      this.nextTurnButton!.on("pointerdown", this.nextTurnButtonClick);
    } else {
      this.enemies.forEach((enemy) => enemy.restoreEnergy());
      this.enemyTurn();
      this.nextTurnButton!.visible = false;
      this.nextTurnButton!.off("pointerdown");
    }
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

    const { moves, attackableEnemies } = this.getPossibleMoves(
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
        closestPlayer.enemyPos
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
      const pathToPlayer = this.pathfind(myPos, closestPlayer.playerPos);
      const moveDistance = Math.floor(me.getEnergy() / me.moveCost());
      const moveTo = pathToPlayer[moveDistance];
      if (moveTo) {
        return this.moveCharacter(myPos, moveTo, me);
      }
    }

    return this.moveCharacter(myPos, myPos, me);
  };
}
