import { Engine, Actor, Loader, vec } from "excalibur";
import { CellType, Level, SpawnCharacterType } from "./level";
import { Resources } from "./resources";

const game = new Engine({
  width: 800,
  height: 600,
});

const loader = new Loader();

loader.addResource(Resources.Sword);
loader.addResource(Resources.TileTexture);

loader.suppressPlayButton = true;
loader.logo = "";

game.start(loader).then(() => {
  let map: CellType[][] = [];
  for (let i = 0; i < 30; i++) {
    map.push([]);
    for (let j = 0; j < 30; j++) {
      if (i == 0 || i == 29 || j == 0 || j == 29) {
        map[i].push(CellType.WALL);
      } else {
        map[i].push(CellType.FLOOR);
      }
    }
  }
  const players = [
    { characterType: SpawnCharacterType.PLAYER, spawnTile: vec(1, 1) },
    { characterType: SpawnCharacterType.PLAYER, spawnTile: vec(15, 15) },
  ];

  game.add("test_level", new Level(game, map, players));
  game.goToScene("test_level");
});
