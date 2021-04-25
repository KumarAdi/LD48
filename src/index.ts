import { Engine, Actor, Loader, vec } from "excalibur";
import { Dungeon } from "./dungeon";
import { CellType, Level, SpawnCharacterType } from "./level";
import { Resources } from "./resources";

const game = new Engine({
  width: 1600,
  height: 1600,
});

const loader = new Loader();

loader.addResource(Resources.Sword);
loader.addResource(Resources.TileTexture);

loader.suppressPlayButton = true;
loader.logo = "";

document.oncontextmenu = () => {
  return false;
};

game.start(loader).then(() => {
  let dungeon = new Dungeon(5);

  const spawnPoints = [
    { characterType: SpawnCharacterType.PLAYER, spawnTile: vec(1, 1) },
    { characterType: SpawnCharacterType.PLAYER, spawnTile: vec(15, 15) },
    { characterType: SpawnCharacterType.ENEMY, spawnTile: vec(20, 20) },
    { characterType: SpawnCharacterType.ENEMY, spawnTile: vec(20, 15) },
  ];

  game.add("test_level", new Level(game, dungeon.asCell2dArray(), spawnPoints));
  game.goToScene("test_level");
});
