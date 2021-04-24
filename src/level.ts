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
} from "excalibur";

import { Character, Enemy, Player } from "./player";
import { AStarFinder, Finder, Grid } from "pathfinding";
import { Resources } from "./resources";
import { PointerDownEvent } from "excalibur/dist/Input/PointerEvents";

export enum CellType {
  WALL,
  FLOOR,
}

const CELL_TYPE_DATA = {
  [CellType.WALL]: {
    solid: true,
  },
  [CellType.FLOOR]: {
    solid: false,
  },
};

type MapCell = {
  player?: Character;
};

export enum SpawnCharacterType {
  PLAYER,
  ENEMY,
}

export type SpawnPoint = {
  characterType: SpawnCharacterType;
  spawnTile: Vector;
};

export class Level extends Scene {
  public static readonly TILE_SIZE = 16;
  private tilesheet: SpriteSheet;

  private engine: Engine;

  private characters: Character[];
  private terrain_data: CellType[][];
  private map_data: MapCell[][];
  private tilemap: TileMap;
  private path_finder: Finder;

  private selectedPlayer?: Character;
  private moveOverlay: Actor[] = [];

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
      new Array(this.terrain_data[0].length).fill({
        player: null,
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
    this.characters.forEach((player: Character) => {
      engine.add(player);
    });
    this.syncTerrainData();

    this.engine.input.pointers.primary.on("down", this.onClick);
  }

  private onClick = (evt: PointerDownEvent) => {
    if (!this.playerTurn) {
      return;
    }

    const clickedOnCharacter = this.characters.find((character) =>
      character.contains(evt.pos.x, evt.pos.y)
    );
    if (!clickedOnCharacter) {
      // did not click on some actor
      if (this.selectedPlayer && this.selectedPlayer.isControllable()) {
        // we have player selected
        const src = this.pixelToTileCoords(this.selectedPlayer.pos);
        const dest = this.pixelToTileCoords(evt.pos);
        const path = this.pathfind(src, dest).map(this.tileToPixelCoords);
        this.selectedPlayer.goTo(path);
        this.deselectPlayer();

        this.nextTurn();
      }
    } else {
      if (clickedOnCharacter.isControllable()) {
        if (
          this.selectedPlayer &&
          this.selectedPlayer.id == clickedOnCharacter.id
        ) {
          this.deselectPlayer();
        } else {
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
          cell.pushSprite(new TileSprite("tile", 49));
          break;
        case CellType.FLOOR:
          cell.solid = CELL_TYPE_DATA[CellType.FLOOR].solid;
          cell.pushSprite(new TileSprite("tile", 73));
          break;
      }
    });
  }

  public pathfind(from: Vector, to: Vector): Vector[] {
    let path_matrix: number[][] = [];
    for (let i = 0; i < this.terrain_data.length; i++) {
      path_matrix.push([]);
      for (let j = 0; j < this.terrain_data[i].length; j++) {
        if (
          CELL_TYPE_DATA[this.terrain_data[i][j]].solid ||
          (this.map_data[i][j].player && !(from.x == i && from.y == j))
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
      .scale(Level.TILE_SIZE);
  };

  public pixelToTileCoords(pixelCoords: Vector): Vector {
    const tileCoords = pixelCoords
      .scale(1 / Level.TILE_SIZE)
      .add(vec(this.tilemap.x, this.tilemap.y));

    return vec(Math.floor(tileCoords.x), Math.floor(tileCoords.y));
  }

  private spawnCharacter = (spawnPoint: SpawnPoint) => {
    switch (spawnPoint.characterType) {
      case SpawnCharacterType.PLAYER:
        return this.spawnPlayer(spawnPoint);
      case SpawnCharacterType.ENEMY:
        return this.spawnEnemy(spawnPoint);
    }
  };

  private spawnPlayer: (spawnPoint: SpawnPoint) => Character = (spawnPoint) => {
    const pixelCoords = this.tileToPixelCoords(spawnPoint.spawnTile);
    return new Player(pixelCoords);
  };

  private spawnEnemy: (spawnPoint: SpawnPoint) => Character = (spawnPoint) => {
    const pixelCoords = this.tileToPixelCoords(spawnPoint.spawnTile);
    return new Enemy(pixelCoords);
  };

  private selectPlayer = (player: Character) => {
    this.deselectPlayer();

    const playerPos = this.pixelToTileCoords(player.pos);
    const moveDistance = player.moveDistance();

    const possibleDestinations = this.getTilesWithinDist(
      playerPos,
      moveDistance
    );
    this.moveOverlay = possibleDestinations.map((point) => {
      const overlayPos = this.tileToPixelCoords(point);
      const tile = new Actor({
        x: overlayPos.x,
        y: overlayPos.y,
        width: Level.TILE_SIZE,
        height: Level.TILE_SIZE,
        color: Color.Blue,
        opacity: 0.75,
      });
      this.add(tile);
      return tile;
    });

    this.selectedPlayer = player;
  };

  private getTilesWithinDist = (pos: Vector, dist: number): Vector[] => {
    console.log(pos);

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
        .filter((point) => point.x >= 0 && point.y >= 0)
        .filter(
          (point) => !CELL_TYPE_DATA[this.terrain_data[point.x][point.y]].solid
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
    this.moveOverlay.forEach((actor) => actor.kill());
    this.moveOverlay = [];
    this.selectedPlayer = undefined;
  };

  public nextTurn = () => {
    this.playerTurn = !this.playerTurn;

    if (!this.playerTurn) {
      this.enemyTurn();
    }
  };

  private enemyTurn = () => {};
}
