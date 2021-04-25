import { Actor, Color, SpriteSheet, vec, Vector } from "excalibur";
import { Level } from "level";
import { Resources } from "./resources";

export abstract class Character extends Actor {
  private static readonly SPEED = 50;

  protected maxHealth: number;
  protected health: number;

  private healthBar!: Actor;

  constructor(spawnPosition: Vector, maxHealth: number) {
    super({
      pos: spawnPosition,
      width: 30,
      height: 30,
    });

    this.maxHealth = maxHealth;
    this.health = maxHealth;
  }

  onInitialize() {
    this.healthBar = new Actor({
      x: 0,
      y: 20,
      width: 30,
      height: 4,
      color: Color.Red,
    });
    this.add(
      new Actor({
        x: this.healthBar.pos.x,
        y: this.healthBar.pos.y,
        width: this.healthBar.width + 4,
        height: this.healthBar.height + 4,
        color: Color.Black,
      })
    );
    this.add(this.healthBar);
  }

  private getLevel = () => {
    return this.scene as Level;
  };

  public goTo = (path: Vector[]) => {
    const action = this.actions.delay(0);
    const moveActions = path.map((waypoint) =>
      action.moveTo(waypoint.x, waypoint.y, Character.SPEED).asPromise()
    );
    return moveActions[moveActions.length - 1];
  };

  public damage(damage: number) {
    this.health -= damage;
    const newWidth = (this.health / this.maxHealth) * 30;
    this.healthBar.pos.x -= (this.healthBar.width - newWidth) / 2;
    this.healthBar.width = newWidth;
  }

  public getHealth(): number {
    return this.health;
  }

  abstract isControllable: () => boolean;

  abstract moveDistance: () => number;
  abstract attackRange: () => number;
  abstract attackDamage: () => number;
}

export class Player extends Character {
  moveDistance = () => 3;
  attackRange = () => 1;
  attackDamage = () => 10;

  constructor(spawnPosition: Vector) {
    super(spawnPosition, 100);
  }

  onInitialize() {
    super.onInitialize();
    this.addDrawing(Resources.Sword);
  }

  isControllable = () => {
    return true;
  };
}

export class Enemy extends Character {
  moveDistance = () => 3;
  attackRange = () => 1;
  attackDamage = () => 10;

  constructor(spawnPosition: Vector) {
    super(spawnPosition, 100);
  }

  onInitialize() {
    super.onInitialize();
    this.addDrawing(Resources.Sword);
  }

  isControllable = () => {
    return false;
  };
}
