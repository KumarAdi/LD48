import { Engine, Actor, Loader } from "excalibur";
import { CellType, Level } from "./level";
import { Resources } from "./resources";

const game = new Engine({
  width: 800,
  height: 600,
});

const paddle = new Actor({
  x: 150,
  // game.drawHeight is the logical height in pixels after HiDPI and scaling
  y: game.drawHeight - 40,
  width: 25,
  height: 25,
});

paddle.onInitialize = () => paddle.addDrawing(Resources.Sword);

game.add(paddle);

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
  game.add("test_level", new Level(game, map, []));
  game.goToScene("test_level");
});
