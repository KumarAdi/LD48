import { SpriteSheet, Texture } from "excalibur";
import sword from "./images/sword.png";
import tilesheet from "./images/dungeon_tiles_0.png";

let Resources = {
  Sword: new Texture(sword),
  TileTexture: new Texture(tilesheet),
};

export { Resources };
