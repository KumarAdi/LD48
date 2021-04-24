import {
  Cell,
  Engine,
  TileMap,
  Scene,
  Vector,
  SpriteSheet,
  TileSprite,
  vec,
} from "excalibur";

import { Player } from "./player";
import { AStarFinder, Finder, Grid } from "pathfinding";
import { Resources } from "./resources";

export enum CellType {
  WALL,
  FLOOR,
}

export type SpawnPoint = {
  spawnTile: Vector;
};

const CELL_TYPE_DATA = {
  [CellType.WALL]: {
    solid: true,
  },
  [CellType.FLOOR]: {
    solid: false,
  },
};

type MapCell = {
  player?: Player;
};

export class Level extends Scene {
  public static readonly TILE_SIZE = 16;
  private tilesheet: SpriteSheet;

  private engine: Engine;

  private players: Player[];
  private terrain_data: CellType[][];
  private map_data: MapCell[][];
  private tilemap: TileMap;
  private path_finder: Finder;

  private selectedPlayer?: Player;

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
    this.players = spawnPoints.map(this.spawnPlayer);

    this.engine = engine;

    this.path_finder = new AStarFinder();
  }

  onInitialize(engine: Engine) {
    engine.add(this.tilemap);
    this.players.forEach((player: Player) => {
      engine.add(player);
    });
    this.syncTerrainData();

    this.engine.input.pointers.primary.on("down", (evt) => {
      if (!this.actors.some((actor) => actor.contains(evt.pos.x, evt.pos.y))) {
        // did not click on some actor
        if (this.selectedPlayer) {
          // we have player selected
          this.selectedPlayer.goTo(evt.pos);
        }
      }
    });
  }

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
          this.map_data[i][j].player
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

  public tileToPixelCoords(tileCoords: Vector): Vector {
    return tileCoords
      .sub(vec(this.tilemap.x, this.tilemap.y))
      .scale(Level.TILE_SIZE);
  }

  public pixelToTileCoords(pixelCoords: Vector): Vector {
    return pixelCoords
      .scale(1 / Level.TILE_SIZE)
      .add(vec(this.tilemap.x, this.tilemap.y));
  }

  private spawnPlayer: (spawnPoint: SpawnPoint) => Player = (spawnPoint) => {
    const pixelCoords = this.tileToPixelCoords(spawnPoint.spawnTile);
    console.log(pixelCoords);
    return new Player(pixelCoords);
  };

  public selectPlayer = (player: Player) => {
    this.selectedPlayer = player;
  };
}
