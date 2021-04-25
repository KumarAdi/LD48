import { SpriteSheet, Texture } from "excalibur";
import sword_idle from "./images/sword_idle.png";
import sword_walk from "./images/sword_walk.png";
import sword_atk from "./images/sword_atk.png";
import bow_idle from "./images/bow_idle.png";
import bow_walk from "./images/bow_walk.png";
import bow_atk from "./images/bow_atk.png";
import magic_idle from "./images/magic_idle.png";
import magic_walk from "./images/magic_walk.png";
import magic_atk from "./images/magic_atk.png";
import tilesheet from "./images/dungeontiles_1.png";

let Resources = {
  SwordIdle: new Texture(sword_idle),
  SwordWalk: new Texture(sword_walk),
  SwordAtk: new Texture(sword_atk),
  BowIdle: new Texture(bow_idle),
  BowWalk: new Texture(bow_walk),
  BowAtk: new Texture(bow_atk),
  MagicIdle: new Texture(magic_idle),
  MagicWalk: new Texture(magic_walk),
  MagicAtk: new Texture(magic_atk),
  TileTexture: new Texture(tilesheet),
};

export { Resources };
