import { Actor, SpriteSheet, vec, Vector } from "excalibur";
import { Level } from "level";
import { Resources } from "./resources";

export abstract class Character extends Actor {
  private static readonly SPEED = 30;

  abstract health: number;

  constructor(spawnPosition: Vector) {
    super({
      pos: spawnPosition,
      width: 16,
      height: 16,
    });
  }

  private getLevel = () => {
    return this.scene as Level;
  };

  public goTo = (path: Vector[]) => {
    console.log(path);
    const action = this.actions.delay(0);
    const moveActions = path.map((waypoint) =>
      action.moveTo(waypoint.x, waypoint.y, Character.SPEED).asPromise()
    );
    return moveActions[moveActions.length - 1];
  };

  abstract isControllable: () => boolean;

  abstract moveDistance: () => number;
  abstract attackRange: () => number;
  abstract attackDamage: () => number;
}

export class Player extends Character {
  health: number;
  moveDistance = () => 3;
  attackRange = () => 1;
  attackDamage = () => 10;

  constructor(spawnPosition: Vector) {
    super(spawnPosition);
    this.health = 100;
  }

  onInitialize() {
    this.addDrawing(Resources.Sword);
  }

  isControllable = () => {
    return true;
  };
}

export class Enemy extends Character {
  health: number;
  moveDistance = () => 3;
  attackRange = () => 1;
  attackDamage = () => 10;

  constructor(spawnPosition: Vector) {
    super(spawnPosition);
    this.health = 100;
  }

  onInitialize() {
    this.addDrawing(Resources.Sword);
  }

  isControllable = () => {
    return false;
  };
}
