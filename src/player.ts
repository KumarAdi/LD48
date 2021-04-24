import { Actor, SpriteSheet, vec, Vector } from "excalibur";
import { Level } from "level";
import { Resources } from "./resources";

export abstract class Character extends Actor {
  private static readonly SPEED = 16;
  constructor(spawnPosition: Vector) {
    super({
      pos: spawnPosition,
      width: 16,
      height: 16,
    });
  }

  public goTo = (path: Vector[]) => {
    console.log(path);
    const action = this.actions.delay(0);
    path.forEach((waypoint) =>
      action.moveTo(waypoint.x, waypoint.y, Character.SPEED)
    );
  };

  abstract isControllable: () => boolean;

  abstract moveDistance: () => number;
}

export class Player extends Character {
  moveDistance = () => 3;

  onInitialize() {
    const level = this.scene as Level;

    this.addDrawing(Resources.Sword);
  }

  isControllable = () => {
    return true;
  };
}

export class Enemy extends Character {
  moveDistance = () => 3;

  onInitialize() {
    const level = this.scene as Level;

    this.addDrawing(Resources.Sword);
  }

  isControllable = () => {
    return false;
  };
}
