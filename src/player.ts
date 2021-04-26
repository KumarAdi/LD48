import {
  Actor,
  Color,
  Engine,
  SpriteSheet,
  vec,
  Vector,
  Effects,
  Label,
  FontStyle,
} from "excalibur";
import { Level } from "level";
import { Resources } from "./resources";

export interface Damage {
  amount: number;

  calculate(defense: Defense): number;
  type(): string;
}

export class MagicDamage implements Damage {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  calculate(defense: Defense): number {
    return Math.max(this.amount - defense.magic_defense, 0);
  }

  type(): string {
    return "M";
  }
}

export class PhysicalDamage implements Damage {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  calculate(defense: Defense): number {
    return Math.max(this.amount - defense.physical_defense, 0);
  }

  type(): string {
    return "P";
  }
}

export class Defense {
  public magic_defense: number;
  public physical_defense: number;

  constructor(magic_defense: number, physical_defense: number) {
    this.magic_defense = magic_defense;
    this.physical_defense = physical_defense;
  }
}

export abstract class Character extends Actor {
  private static readonly SPEED = 150;
  private static readonly DAMAGE_EFFECT = new Effects.Colorize(Color.Red);
  private readonly DAMAGE_LABEL = new Label();
  private readonly DEBUG_LABEL = new Label();

  protected maxHealth: number;
  protected health: number;

  protected maxEnergy: number;
  protected energy: number;

  protected healthBarColor: Color;
  private healthBar!: Actor;

  private controllable: boolean;

  constructor(
    spawnPosition: Vector,
    maxHealth: number,
    maxEnergy: number,
    controllable: boolean
  ) {
    super({
      pos: spawnPosition,
      width: 40,
      height: 40,
    });

    this.maxHealth = maxHealth;
    this.health = maxHealth;
    this.healthBarColor = controllable ? Color.Green : Color.Red;

    this.maxEnergy = maxEnergy;
    this.energy = maxEnergy;

    this.controllable = controllable;
  }

  onInitialize(engine: Engine) {
    this.healthBar = new Actor({
      x: 0,
      y: 24,
      width: 30,
      height: 4,
      color: this.healthBarColor,
    });
    this.DEBUG_LABEL.color = Color.White;
    this.DEBUG_LABEL.fontSize = 15;
    this.z;
    this.add(this.DEBUG_LABEL);
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

    this.DAMAGE_LABEL.color = Color.White;
    this.DAMAGE_LABEL.fontSize = 15;
    this.DAMAGE_LABEL.fontStyle = FontStyle.Oblique;
    this.add(this.DAMAGE_LABEL);
  }

  private getLevel = () => {
    return this.scene as Level;
  };

  public getStats = (): string[] => {
    return [
      `HP: ${this.health} / ${this.maxHealth}`,
      `DEF(M): ${this.defense().magic_defense}`,
      `DEF(P): ${this.defense().physical_defense}`,
      `HP: ${this.health} / ${this.maxHealth}`,
      `ATK(${this.attackDamage().type()}): ${this.attackDamage().amount}`,
      `RNG: ${this.attackRange()}`,
      `MVMT: ${Math.floor(this.getEnergy() / this.moveCost())} / ${Math.floor(
        this.maxEnergy / this.moveCost()
      )}`,
    ];
  };

  getZIndex(): number {
    return this.pos.y;
  }

  public goTo = (path: Vector[]) => {
    this.setDrawing("walk");
    let action = this.actions.delay(0);
    for (let waypoint of path) {
      action.asPromise().then(() => {
        this.currentDrawing.flipHorizontal = waypoint.x < this.pos.x;
      });
      action = action.moveTo(waypoint.x, waypoint.y, Character.SPEED);
      // action.asPromise().then(() => {
      //   this.DEBUG_LABEL.text = `${this.z}`;
      // });
    }
    return action.asPromise().then(() => this.setDrawing("idle"));
  };

  public damage(damage: Damage): Boolean {
    let computed_damage = damage.calculate(this.defense());
    this.health -= computed_damage;
    this.DAMAGE_LABEL.text = `${computed_damage}`;
    this.DAMAGE_LABEL.pos = new Vector(0, 0);
    const damageLabelAnimation = (fade: number) => {
      if (fade > 0) {
        this.DAMAGE_LABEL.opacity = fade;
        this.DAMAGE_LABEL.pos.addEqual(new Vector(0.1, -0.1));
        setTimeout(() => damageLabelAnimation(fade - 0.02), 10);
      } else {
        this.DAMAGE_LABEL.opacity = 1;
        this.DAMAGE_LABEL.text = "";
      }
    };
    damageLabelAnimation(1);
    this.currentDrawing.addEffect(Character.DAMAGE_EFFECT);
    setTimeout(() => {
      this.currentDrawing.removeEffect(Character.DAMAGE_EFFECT);
    }, 100);

    if (this.health <= 0) {
      this.kill();
      return true;
    }

    const newWidth = (this.health / this.maxHealth) * 30;
    this.healthBar.pos.x -= (this.healthBar.width - newWidth) / 2;
    this.healthBar.width = newWidth;
    return false;
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

  public isControllable() {
    return this.controllable;
  }

  abstract moveCost: () => number;
  abstract defense: () => Defense;
  abstract attackCost: () => number;
  abstract attackRange: () => number;
  abstract attackDamage: () => Damage;
}

export class Sword extends Character {
  moveCost = () => 1;
  defense = () => new Defense(2, 10);
  attackCost = () => 1;
  attackRange = () => 1;
  attackDamage = () => new PhysicalDamage(10);

  constructor(spawnPosition: Vector, controllable: boolean) {
    super(spawnPosition, 100, 3, controllable);
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
}

export class Bow extends Character {
  moveCost = () => 1;
  defense = () => new Defense(2, 2);
  attackCost = () => 2;
  attackRange = () => 5;
  attackDamage = () => new PhysicalDamage(20);

  constructor(spawnPosition: Vector, controllable: boolean) {
    super(spawnPosition, 75, 5, controllable);
  }

  onInitialize(engine: Engine) {
    super.onInitialize(engine);
    const idleSheet = new SpriteSheet(Resources.BowIdle, 4, 1, 40, 40);
    this.addDrawing("idle", idleSheet.getAnimationForAll(engine, 1000 / 6));
    const atkSheet = new SpriteSheet(Resources.BowAtk, 6, 1, 40, 40);
    const atkAnim = atkSheet.getAnimationForAll(engine, 1000 / 6);
    atkAnim.loop = false;
    this.addDrawing("atk", atkAnim);
    const walkSheet = new SpriteSheet(Resources.BowWalk, 6, 1, 40, 40);
    this.addDrawing("walk", walkSheet.getAnimationForAll(engine, 1000 / 6));

    this.setDrawing("idle");
  }
}

export class Magic extends Character {
  moveCost = () => 3;
  defense = () => new Defense(10, 2);
  attackCost = () => 2;
  attackRange = () => 5;
  attackDamage = () => new MagicDamage(20);

  constructor(spawnPosition: Vector, controllable: boolean) {
    super(spawnPosition, 75, 5, controllable);
  }

  onInitialize(engine: Engine) {
    super.onInitialize(engine);
    const idleSheet = new SpriteSheet(Resources.MagicIdle, 4, 1, 40, 40);
    this.addDrawing("idle", idleSheet.getAnimationForAll(engine, 1000 / 6));
    const atkSheet = new SpriteSheet(Resources.MagicAtk, 6, 1, 40, 40);
    const atkAnim = atkSheet.getAnimationForAll(engine, 1000 / 6);
    atkAnim.loop = false;
    this.addDrawing("atk", atkAnim);
    const walkSheet = new SpriteSheet(Resources.MagicWalk, 6, 1, 40, 40);
    this.addDrawing("walk", walkSheet.getAnimationForAll(engine, 1000 / 6));

    this.setDrawing("idle");
  }
}
