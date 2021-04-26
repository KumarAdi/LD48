import { Sound, SpriteSheet, Texture } from "excalibur";
import sword_idle from "./images/sword_idle.png";
import sword_walk from "./images/sword_walk.png";
import sword_atk from "./images/sword_atk.png";
import bow_idle from "./images/bow_idle.png";
import bow_walk from "./images/bow_walk.png";
import bow_atk from "./images/bow_atk.png";
import magic_idle from "./images/magic_idle.png";
import magic_walk from "./images/magic_walk.png";
import magic_atk from "./images/magic_atk.png";
import enemy_sword_idle from "./images/enemysword_idle.png";
import enemy_sword_walk from "./images/enemysword_walk.png";
import enemy_sword_atk from "./images/enemysword_atk.png";
import enemy_bow_idle from "./images/enemybow_idle.png";
import enemy_bow_walk from "./images/enemybow_walk.png";
import enemy_bow_atk from "./images/enemybow_atk.png";
import enemy_magic_idle from "./images/enemymagic_idle.png";
import enemy_magic_walk from "./images/enemymagic_walk.png";
import enemy_magic_atk from "./images/enemymagic_atk.png";
import tilesheet from "./images/dungeontiles_1.png";
import next_turn from "./images/endturn.png";
import skip_tutorial from "./images/skip.png";
import title from "./images/title.png";
import end from "./images/gameover.png";

let MainMenuResources = {
  title: new Texture(title),
};

let GameOverResources = {
  end: new Texture(end),
};

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
  EnemySwordIdle: new Texture(enemy_sword_idle),
  EnemySwordWalk: new Texture(enemy_sword_walk),
  EnemySwordAtk: new Texture(enemy_sword_atk),
  EnemyBowIdle: new Texture(enemy_bow_idle),
  EnemyBowWalk: new Texture(enemy_bow_walk),
  EnemyBowAtk: new Texture(enemy_bow_atk),
  EnemyMagicIdle: new Texture(enemy_magic_idle),
  EnemyMagicWalk: new Texture(enemy_magic_walk),
  EnemyMagicAtk: new Texture(enemy_magic_atk),
  TileTexture: new Texture(tilesheet),
  NextTurnTexture: new Texture(next_turn),
  SkipTutorialTexture: new Texture(skip_tutorial),
};

let MusicResources = {
  Bow: new Sound(require("./music/bow.wav")),
  Sword: new Sound(require("./music/sword.wav")),
  Magic: new Sound(require("./music/magic.wav")),
  DarkHollows: new Sound(require("./music/darkhollows.wav")),
  Deselect: new Sound(require("./music/deselect.wav")),
  Die: new Sound(require("./music/die.wav")),
  Select: new Sound(require("./music/select.wav")),
  TileChange: new Sound(require("./music/tilechange.wav")),
  Title: new Sound(require("./music/title.wav")),
};

export { Resources, MainMenuResources, GameOverResources, MusicResources };
