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

  public exp: number;
  public readonly cClass: CharacterClass;
  public abstract readonly controllable: boolean;
  public moveExhausted: MoveExhausted = { inner: false, outer: false };

  constructor(
    spawnPosition: Vector,
    characterClass: CharacterClass,
    exp: number
  ) {
    super({
      pos: spawnPosition,
      width: 40,
      height: 40,
    });
    this.cClass = characterClass;
    this._health = characterClass.health.maxHealth;
    this.exp = exp;
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
    let steps = path.length - 1;
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

    const damageLabelActor = new Actor();
    this.add(damageLabelActor);
    const damageLabel = new Label();
    damageLabel.color = Color.White;
    damageLabel.fontSize = 15;
    damageLabel.fontStyle = FontStyle.Oblique;
    damageLabel.text = `${feltDamage}`;
    damageLabel.pos = new Vector(0, 0);
    damageLabelActor.add(damageLabel);
    damageLabelActor.actions.moveBy(10, -10, 50);
    damageLabel.actions
      .fade(0, 1000)
      .asPromise()
      .then(() => {
        this.remove(damageLabelActor);
      });
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
      levelUpDisplay.push("");
      levelUpDisplay.push("Click to dismiss");
      return levelUpDisplay;
    }
    return null;
  }

  get canAttack(): boolean {
    return !this.moveExhausted.inner && !this.moveExhausted.outer;
  }

  spendAttack() {
    this.moveExhausted.inner = true;
    this.moveExhausted.outer = true;
    this.cClass.playAttackSound();
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

  constructor(
    spawnPosition: Vector,
    characterClass: CharacterClass,
    exp: number = 0
  ) {
    super(spawnPosition, characterClass, exp);
  }
}

export class Enemy extends Character {
  public readonly controllable = false;

  constructor(
    spawnPosition: Vector,
    characterClass: CharacterClass,
    exp: number = 0
  ) {
    super(spawnPosition, characterClass, exp);
  }
}
