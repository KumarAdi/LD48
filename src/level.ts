import {
  Cell,
  Engine,
  TileMap,
  Scene,
  Vector,
  SpriteSheet,
  TileSprite,
} from "excalibur";
import { Player } from "./actors";
import { Resources } from "./resources";

export enum CellType {
  WALL,
  FLOOR,
}

export class Level extends Scene {
  public static readonly TILE_SIZE = 16;
  private tilesheet: SpriteSheet;

  private players: Player[];
  private terrain_data: CellType[][];
  private tilemap: TileMap;

  constructor(engine: Engine, terrain_data: CellType[][], players: Player[]) {
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
    this.tilesheet = new SpriteSheet({
      image: Resources.TileTexture,
      spWidth: Level.TILE_SIZE,
      spHeight: Level.TILE_SIZE,
      rows: Resources.TileTexture.height / Level.TILE_SIZE,
      columns: Resources.TileTexture.width / Level.TILE_SIZE,
    });

    this.tilemap.registerSpriteSheet("tile", this.tilesheet);
    this.players = players;
  }

  onInitialize(engine: Engine) {
    engine.add(this.tilemap);
    this.players.forEach((player: Player) => {
      engine.add(player);
    });
    this.updateTileMap();
  }

  updateTileMap() {
    this.tilemap.data.forEach((cell: Cell, i) => {
      cell.clearSprites();
      const x = Math.floor(i / this.tilemap.cols);
      const y = i % this.tilemap.cols;
      switch (this.terrain_data[x][y]) {
        case CellType.WALL:
          cell.solid = true;
          cell.pushSprite(new TileSprite("tile", 49));
          break;
        case CellType.FLOOR:
          cell.solid = false;
          cell.pushSprite(new TileSprite("tile", 73));
          break;
      }
    });
  }

  // public pathfind(from: Vector, to: Vector): Vector[] {
  //   let path = [];
  //   return path;
  // }

  public tileToPixelCoords(tileCoords: Vector): Vector {
    return tileCoords.scale(1 / Level.TILE_SIZE);
  }
}
