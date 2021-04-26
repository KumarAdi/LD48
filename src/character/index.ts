import {
  Actor,
  Color,
  Effects,
  Engine,
  FontStyle,
  Label,
  Vector,
} from "excalibur";
import { CharacterClass, Sword, Bow, Magic, Attack } from "./class";

export { CharacterClass, Sword, Bow, Magic };

export type MoveExhausted = {
  inner: boolean;
  outer: boolean;
};

export abstract class Character extends Actor {
  private static readonly SPEED = 150;
  private static readonly DAMAGE_EFFECT = new Effects.Colorize(Color.Red);

  private healthBar!: Actor;
  private _health: number;

  protected moveExhausted: MoveExhausted = { inner: false, outer: false };
  protected exp: number = 0;

  public readonly cClass: CharacterClass;
  public abstract readonly controllable: boolean;

  constructor(spawnPosition: Vector, characterClass: CharacterClass) {
    super({
      pos: spawnPosition,
      width: 40,
      height: 40,
    });
    this.cClass = characterClass;
    this._health = characterClass.health.maxHealth;
  }

  onInitialize(engine: Engine) {
    super.onInitialize(engine);
    this.healthBar = new Actor({
      x: 0,
      y: 24,
      width: 30,
      height: 4,
      color: this.controllable ? Color.Green : Color.Red,
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

    this.addDrawing(
      "idle",
      this.cClass.idleSheet.getAnimationForAll(engine, 1000 / 6)
    );
    const atkAnim = this.cClass.atkSheet.getAnimationForAll(engine, 1000 / 6);
    atkAnim.loop = false;
    this.addDrawing("atk", atkAnim);
    this.addDrawing(
      "walk",
      this.cClass.walkSheet.getAnimationForAll(engine, 1000 / 6)
    );

    this.setDrawing("idle");
  }

  get health(): number {
    return this._health;
  }

  set health(val: number) {
    this._health = val;
    if (this.healthBar) {
      const newWidth = (this._health / this.cClass.health.maxHealth) * 30;
      this.healthBar.pos.x -= (this.healthBar.width - newWidth) / 2;
      this.healthBar.width = newWidth;
    }
  }

  public goTo = (path: Vector[]) => {
    let steps = path.length;
    if (!this.moveExhausted.inner) {
      this.moveExhausted.inner = true;
      steps -= this.cClass.moveRange.inner;
    }
    if (steps > 0) {
      this.moveExhausted.outer = true;
    }

    this.setDrawing("walk");
    let action = this.actions.delay(0);
    for (let waypoint of path) {
      action.asPromise().then(() => {
        this.currentDrawing.flipHorizontal = waypoint.x < this.pos.x;
      });
      action = action.moveTo(waypoint.x, waypoint.y, Character.SPEED);
    }
    return action.asPromise().then(() => this.setDrawing("idle"));
  };

  public damage(damage: Attack): Boolean {
    let feltDamage = this.cClass.feltDamage(damage);

    const damageLabel = new Label();
    damageLabel.color = Color.White;
    damageLabel.fontSize = 15;
    damageLabel.fontStyle = FontStyle.Oblique;
    damageLabel.text = `${feltDamage}`;
    this.add(damageLabel);
    damageLabel.actions
      .delay(0)
      .fade(0, 1000)
      .moveBy(10, -10, 1000)
      .delay(1000)
      .die();
    this.currentDrawing.addEffect(Character.DAMAGE_EFFECT);
    this.actions
      .delay(100)
      .asPromise()
      .then(() => {
        this.currentDrawing.removeEffect(Character.DAMAGE_EFFECT);
      });

    this.health -= feltDamage;

    if (this.health <= 0) {
      this.kill();
      return true;
    }
    return false;
  }

  public getStats = (): string[] => {
    return [
      `HP: ${this.health} / ${this.cClass.health.maxHealth}`,
      `DEF(M): ${this.cClass.defence.magic}`,
      `DEF(P): ${this.cClass.defence.physical}`,
      `ATK: ${this.cClass.attack.magicalDamage}(M) ${this.cClass.attack.physicalDamage}(P)`,
      `RNG: ${this.cClass.attack.range}`,
      `EXP: ${this.exp} / ${this.cClass.expForNextLevel()}`,
      `LVL: ${this.cClass.level}`,
    ];
  };

  public gainExp(exp: number): string[] | null {
    this.exp += exp;
    const nextLevelExp = this.cClass.expForNextLevel();
    if (this.exp >= nextLevelExp) {
      this.exp -= nextLevelExp;
      let currentStatDisplay = this.getStats();

      let oldMaxHealth = this.cClass.health.maxHealth;
      this.cClass.levelUp();
      this.health += this.cClass.health.maxHealth - oldMaxHealth;

      let newStatDisplay = this.getStats().map((s) => s.split(": ")[1]);

      let levelUpDisplay = currentStatDisplay.map(
        (s, i) => s + " => " + newStatDisplay[i]
      );
      return levelUpDisplay;
    }
    return null;
  }

  get canAttack(): boolean {
    return this.moveExhausted.inner && this.moveExhausted.outer;
  }

  spendAttack() {
    this.moveExhausted.inner = true;
    this.moveExhausted.outer = true;
  }

  nextTurn() {
    if (this.canAttack) {
      this.health = Math.min(
        this.cClass.health.maxHealth,
        this.health + this.cClass.health.healOnNoMove
      );
    }

    this.moveExhausted.inner = false;
    this.moveExhausted.outer = false;
  }
}

export class Player extends Character {
  public readonly controllable = true;

  constructor(spawnPosition: Vector, characterClass: CharacterClass) {
    super(spawnPosition, characterClass);
  }
}

export class Enemy extends Character {
  public readonly controllable = false;

  constructor(spawnPosition: Vector, characterClass: CharacterClass) {
    super(spawnPosition, characterClass);
  }
}
