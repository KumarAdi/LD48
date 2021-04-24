import { Actor, vec, Vector } from "excalibur";
import { Level } from "level";
import { Resources } from "./resources";

export class Player extends Actor {
  private static readonly SPEED = 16;

  constructor(spawnPosition: Vector) {
    super({
      pos: spawnPosition,
      width: 25,
      height: 25,
    });
  }

  onInitialize() {
    const level = this.scene as Level;

    this.addDrawing(Resources.Sword);

    this.on("pointerdown", (evt) => {
      level.selectPlayer(this);
    });
  }

  public goTo = (path: Vector[]) => {
    console.log(path);
    const action = this.actions.delay(0);
    path.forEach((waypoint) =>
      action.moveTo(waypoint.x, waypoint.y, Player.SPEED)
    );
  };
}
