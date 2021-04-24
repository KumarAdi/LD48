import { Engine, Actor, Loader } from "excalibur";
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

loader.suppressPlayButton = true;
loader.logo = "";

game.start(loader);
