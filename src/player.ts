import { Actor, Color, Engine, SpriteSheet, vec, Vector } from "excalibur";
import { Level } from "level";
import { Resources } from "./resources";

export abstract class Character extends Actor {
  private static readonly SPEED = 50;

  protected maxHealth: number;
  protected health: number;

  protected maxEnergy: number;
  protected energy: number;

  protected healthBarColor: Color;
  private healthBar!: Actor;

  constructor(
    spawnPosition: Vector,
    maxHealth: number,
    maxEnergy: number,
    healthBarColor: Color = Color.Red
  ) {
    super({
      pos: spawnPosition,
      width: 40,
      height: 40,
    });

    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.healthBarColor = healthBarColor;

    this.maxEnergy = maxEnergy;
    this.energy = maxEnergy;
  }

  onInitialize(engine: Engine) {
    this.healthBar = new Actor({
      x: 0,
      y: 24,
      width: 30,
      height: 4,
      color: this.healthBarColor,
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
    this.setDrawing("walk");
    const action = this.actions.delay(0);
    const moveActions = path.map((waypoint) => {
      this.currentDrawing.flipHorizontal = waypoint.x < this.pos.x;
      return action.moveTo(waypoint.x, waypoint.y, Character.SPEED).asPromise();
    });
    return moveActions[moveActions.length - 1].then(() =>
      this.setDrawing("idle")
    );
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

  public getEnergy(): number {
    return this.energy;
  }

  public spendEnergy(energyLost: number) {
    this.energy -= energyLost;
  }

  public restoreEnergy() {
    this.energy = this.maxEnergy;
  }

  abstract isControllable: () => boolean;

  abstract moveCost: () => number;
  abstract attackCost: () => number;
  abstract attackRange: () => number;
  abstract attackDamage: () => number;
}

export class Player extends Character {
  moveCost = () => 1;
  attackCost = () => 1;
  attackRange = () => 1;
  attackDamage = () => 10;

  constructor(spawnPosition: Vector) {
    super(spawnPosition, 100, 3, Color.Green);
  }

  onInitialize(engine: Engine) {
    super.onInitialize(engine);
    const idleSheet = new SpriteSheet(Resources.SwordIdle, 4, 1, 40, 40);
    this.addDrawing("idle", idleSheet.getAnimationForAll(engine, 1000 / 6));
    const atkSheet = new SpriteSheet(Resources.SwordAtk, 6, 1, 40, 40);
    const atkAnim = atkSheet.getAnimationForAll(engine, 1000 / 6);
    atkAnim.loop = false;
    this.addDrawing("atk", atkAnim);
    const walkSheet = new SpriteSheet(Resources.SwordWalk, 6, 1, 40, 40);
    this.addDrawing("walk", walkSheet.getAnimationForAll(engine, 1000 / 6));

    this.setDrawing("idle");
  }

  isControllable = () => {
    return true;
  };
}

export class Enemy extends Character {
  moveCost = () => 1;
  attackCost = () => 1;
  attackRange = () => 1;
  attackDamage = () => 10;

  constructor(spawnPosition: Vector) {
    super(spawnPosition, 100, 3);
  }

  onInitialize(engine: Engine) {
    super.onInitialize(engine);
    const idleSheet = new SpriteSheet(Resources.SwordIdle, 4, 1, 40, 40);
    this.addDrawing("idle", idleSheet.getAnimationForAll(engine, 1000 / 6));
    const atkSheet = new SpriteSheet(Resources.SwordAtk, 4, 1, 40, 40);
    this.addDrawing("atk", atkSheet.getAnimationForAll(engine, 1000 / 6));
    const walkSheet = new SpriteSheet(Resources.SwordWalk, 4, 1, 40, 40);
    this.addDrawing("walk", walkSheet.getAnimationForAll(engine, 1000 / 6));
  }

  isControllable = () => {
    return false;
  };
}
