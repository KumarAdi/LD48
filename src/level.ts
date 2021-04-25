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
} from "excalibur";

import { Character, Enemy, Player } from "./player";
import { AStarFinder, Finder, Grid } from "pathfinding";
import { Resources } from "./resources";
import {
  PointerButton,
  PointerDownEvent,
} from "excalibur/dist/Input/PointerEvents";

export enum CellType {
  WALL,
  FLOOR,
  NONE,
}

const CELL_TYPE_DATA = {
  [CellType.WALL]: {
    solid: true,
  },
  [CellType.FLOOR]: {
    solid: false,
  },
  [CellType.NONE]: {
    solid: true,
  },
};

type MapCell = {
  character?: Character;
};

export enum SpawnCharacterType {
  PLAYER,
  ENEMY,
}

export type SpawnPoint = {
  characterType: SpawnCharacterType;
  spawnTile: Vector;
};

export function manhattanDistance(a: Vector, b: Vector) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export class Level extends Scene {
  public static readonly TILE_SIZE = 30;
  private tilesheet: SpriteSheet;

  private engine: Engine;

  private characters: Character[];
  private enemies: Enemy[] = [];
  private players: Player[] = [];
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
    this.characters = spawnPoints.map(this.spawnCharacter);
    this.engine = engine;

    this.path_finder = new AStarFinder();

    this.playerTurn = true;
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

    this.nextTurnButton.on("pointerdown", this.nextTurn);

    this.add(this.nextTurnButton);

    this.engine.input.pointers.primary.on("down", this.onClick);
  }

  private onClick = (evt: PointerDownEvent) => {
    if (evt.button == PointerButton.Right) {
      let startDragMousePos = evt.pos;
      let startDragCameraPos = this.camera.pos;
      this.engine.input.pointers.primary.on("move", (evt) => {
        this.camera.pos = startDragCameraPos.sub(
          evt.pos.sub(startDragMousePos)
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
    }
  };

  syncTerrainData() {
    this.tilemap.data.forEach((cell: Cell, i) => {
      cell.clearSprites();
      const x = Math.floor(i / this.tilemap.cols);
      const y = i % this.tilemap.cols;
      switch (this.terrain_data[x][y]) {
        case CellType.WALL:
          cell.solid = CELL_TYPE_DATA[CellType.WALL].solid;
          cell.pushSprite(new TileSprite("tile", 1));
          break;
        case CellType.FLOOR:
          cell.solid = CELL_TYPE_DATA[CellType.FLOOR].solid;
          cell.pushSprite(new TileSprite("tile", 2));
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
    const path = this.pathfind(oldPos, newPos).map(this.tileToPixelCoords);
    this.map_data[oldPos.x][oldPos.y].character = undefined;
    this.map_data[newPos.x][newPos.y].character = character;
    character.spendEnergy(character.moveCost() * (path.length - 1));
    return character.goTo(path);
  };

  public pathfind(from: Vector, to: Vector): Vector[] {
    let path_matrix: number[][] = [];
    for (let i = 0; i < this.terrain_data.length; i++) {
      path_matrix.push([]);
      for (let j = 0; j < this.terrain_data[i].length; j++) {
        if (
          CELL_TYPE_DATA[this.terrain_data[i][j]].solid ||
          (this.map_data[i][j].character &&
            !(from.x == i && from.y == j) &&
            !(to.x == i && to.y == j))
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
    let spawnedCharacter: Character;
    switch (spawnPoint.characterType) {
      case SpawnCharacterType.PLAYER:
        spawnedCharacter = this.spawnPlayer(spawnPoint);
        break;
      case SpawnCharacterType.ENEMY:
        spawnedCharacter = this.spawnEnemy(spawnPoint);
        break;
    }

    this.map_data[spawnPoint.spawnTile.x][
      spawnPoint.spawnTile.y
    ].character = spawnedCharacter;

    return spawnedCharacter;
  };

  private spawnPlayer: (spawnPoint: SpawnPoint) => Character = (spawnPoint) => {
    const pixelCoords = this.tileToPixelCoords(spawnPoint.spawnTile);
    const player = new Player(pixelCoords);
    this.players.push(player);
    return player;
  };

  private spawnEnemy: (spawnPoint: SpawnPoint) => Character = (spawnPoint) => {
    const pixelCoords = this.tileToPixelCoords(spawnPoint.spawnTile);
    const enemy = new Enemy(pixelCoords);
    this.enemies.push(enemy);
    return enemy;
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
          (pos) => manhattanDistance(enemyPos, pos) <= attackRange
        )
      );
    return {
      moves: possibleDestinations,
      attackableEnemies: enemiesInRange,
    };
  };

  private generateOverlay = (player: Player) => {
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

      tile.on("pointerdown", (evt) => {
        if (this.selectedPlayer && this.selectedPlayer.isControllable()) {
          // we have player selected
          const src = this.pixelToTileCoords(this.selectedPlayer.pos);
          this.moveCharacter(src, point, this.selectedPlayer).then(() => {});
          this.deselectPlayer();
        }
      });

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
            const src = this.pixelToTileCoords(this.selectedPlayer.pos);
            const pathToEnemy = this.pathfind(src, enemyPos);
            const attackFrom =
              pathToEnemy[pathToEnemy.length - (1 + player.attackRange())];
            const selectedPlayer = this.selectedPlayer;
            this.moveCharacter(src, attackFrom, this.selectedPlayer).then(
              () => {
                enemy.damage(selectedPlayer.attackDamage());
                selectedPlayer.spendEnergy(selectedPlayer.attackCost());
                console.log(
                  `attacking enemy ${
                    enemy.id
                  } at ${enemyPos}, its health is now ${enemy.getHealth()}`
                );
              }
            );
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
            !CELL_TYPE_DATA[this.terrain_data[point.y][point.x]].solid &&
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

  public nextTurn = () => {
    this.playerTurn = !this.playerTurn;

    if (!this.playerTurn) {
      this.enemies.forEach((enemy) => enemy.restoreEnergy());
      this.enemyTurn();
      this.nextTurnButton!.visible = false;
    } else {
      this.players.forEach((enemy) => enemy.restoreEnergy());
      this.nextTurnButton!.visible = true;
    }
  };

  private enemyTurn = () => {
    let i = 0;

    const calculateNextEnemyMove = () => {
      if (i < this.enemies.length) {
        this.calculateEnemyMove(this.enemies[i]).then(calculateNextEnemyMove);
        i++;
      } else {
        this.nextTurn();
      }
    };
    calculateNextEnemyMove();
  };

  private calculateEnemyMove = (me: Enemy) => {
    const myPos = this.pixelToTileCoords(me.pos);

    const { moves, attackableEnemies } = this.getPossibleMoves(
      me,
      this.players
    );

    if (attackableEnemies.length > 0) {
      const closestPlayer = attackableEnemies.sort(
        (playerA, playerB) =>
          manhattanDistance(playerB.enemyPos, myPos) -
          manhattanDistance(playerA.enemyPos, myPos)
      )[0];
      const pathToPlayer = this.pathfind(myPos, closestPlayer.enemyPos);
      const attackFrom =
        pathToPlayer[pathToPlayer.length - (1 + me.attackRange())];
      return this.moveCharacter(myPos, attackFrom, me).then(() => {
        closestPlayer.enemy.damage(me.attackDamage());
        me.spendEnergy(me.attackCost());
        console.log(
          `attacking player ${closestPlayer.enemy.id} at ${
            closestPlayer.enemyPos
          }, its health is now ${closestPlayer.enemy.getHealth()}`
        );
      });
    }

    const closestPlayer = this.players
      .map((player) => {
        return {
          player,
          playerPos: this.pixelToTileCoords(player.pos),
        };
      })
      .sort(
        (playerA, playerB) =>
          manhattanDistance(playerB.playerPos, myPos) -
          manhattanDistance(playerA.playerPos, myPos)
      )[0];
    const pathToPlayer = this.pathfind(myPos, closestPlayer.playerPos);
    const moveDistance = Math.floor(me.getEnergy() / me.moveCost());
    const moveTo = pathToPlayer[moveDistance];
    return this.moveCharacter(myPos, moveTo, me);
  };
}
