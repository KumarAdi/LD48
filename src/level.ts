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
import { Resources } from "./resources";

export enum CellType {
  WALL,
  FLOOR,
}

export type SpawnPoint = {
  spawnTile: Vector;
};

export class Level extends Scene {
  public static readonly TILE_SIZE = 16;
  private tilesheet: SpriteSheet;

  private engine: Engine;

  private players: Player[];
  private terrain_data: CellType[][];
  private tilemap: TileMap;

  private selectedPlayer: Player;

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
  }

  onInitialize(engine: Engine) {
    engine.add(this.tilemap);
    this.players.forEach((player: Player) => {
      engine.add(player);
    });
    this.updateTileMap();

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

  private updateTileMap() {
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
