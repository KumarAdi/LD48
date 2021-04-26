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
import enemysword_idle from "./images/enemysword_idle.png";
import enemysword_walk from "./images/enemysword_walk.png";
import enemysword_atk from "./images/enemysword_atk.png";
import enemybow_idle from "./images/enemybow_idle.png";
import enemybow_walk from "./images/enemybow_walk.png";
import enemybow_atk from "./images/enemybow_atk.png";
import enemymagic_idle from "./images/enemymagic_idle.png";
import enemymagic_walk from "./images/enemymagic_walk.png";
import enemymagic_atk from "./images/enemymagic_atk.png";
import tilesheet from "./images/dungeontiles_1.png";
import next_turn from "./images/endturn.png";

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
  EnemySwordIdle: new Texture(enemysword_idle),
  EnemySwordWalk: new Texture(enemysword_walk),
  EnemySwordAtk: new Texture(enemysword_atk),
  EnemyBowIdle: new Texture(enemybow_idle),
  EnemyBowWalk: new Texture(enemybow_walk),
  EnemyBowAtk: new Texture(enemybow_atk),
  EnemyMagicIdle: new Texture(enemymagic_idle),
  EnemyMagicWalk: new Texture(enemymagic_walk),
  EnemyMagicAtk: new Texture(enemymagic_atk),
  TileTexture: new Texture(tilesheet),
  NextTurnTexture: new Texture(next_turn),
};

export { Resources };
