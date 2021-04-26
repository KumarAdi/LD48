import { SpriteSheet } from "excalibur";
import { MusicResources, Resources } from "../resources";

export type MoveRange = {
  inner: number;
  outer: number;
};

export type Defence = {
  magic: number;
  physical: number;
};

export type Attack = {
  range: number;
  magicalDamage: number;
  physicalDamage: number;
};

export type Health = {
  maxHealth: number;
  healOnNoMove: number;
};

export abstract class CharacterClass {
  public abstract idleSheet: SpriteSheet;
  public abstract atkSheet: SpriteSheet;
  public abstract walkSheet: SpriteSheet;

  public abstract moveRange: MoveRange;
  public abstract defence: Defence;
  public abstract attack: Attack;
  public abstract health: Health;

  public level: number = 1;

  public feltDamage(attack: Attack): number {
    let magicDamage = Math.max(attack.magicalDamage - this.defence.magic, 0);
    let physicalDamage = Math.max(
      attack.physicalDamage - this.defence.physical,
      0
    );
    return magicDamage + physicalDamage;
  }

  abstract levelUp(n?: number): CharacterClass;

  abstract expForNextLevel(): number;

  abstract deathExp(): number;

  abstract playAttackSound(): void;
}

export class Sword extends CharacterClass {
  public idleSheet: SpriteSheet;
  public atkSheet: SpriteSheet;
  public walkSheet: SpriteSheet;

  public moveRange = { inner: 3, outer: 3 };
  public defence = { magic: 2, physical: 10 };
  public attack = { range: 1, magicalDamage: 0, physicalDamage: 12 };
  public health = { maxHealth: 40, healOnNoMove: 10 };

  constructor(controllable: boolean) {
    super();
    if (controllable) {
      this.idleSheet = new SpriteSheet(Resources.SwordIdle, 4, 1, 40, 40);
      this.atkSheet = new SpriteSheet(Resources.SwordAtk, 6, 1, 40, 40);
      this.walkSheet = new SpriteSheet(Resources.SwordWalk, 6, 1, 40, 40);
    } else {
      this.idleSheet = new SpriteSheet(Resources.EnemySwordIdle, 4, 1, 40, 40);
      this.atkSheet = new SpriteSheet(Resources.EnemySwordAtk, 6, 1, 40, 40);
      this.walkSheet = new SpriteSheet(Resources.EnemySwordWalk, 6, 1, 40, 40);
    }
  }

  levelUp(n: number = 1): Sword {
    for (let i = 0; i < n; i++) {
      if (this.level % 5 === 0) {
        this.moveRange.inner += 1;
        this.moveRange.outer += 1;
      }
      this.defence.magic += 5;
      this.defence.physical += 5;
      this.attack.physicalDamage += 5;
      this.health.maxHealth += 20;
      this.health.healOnNoMove += 15;
      this.level += 1;
    }
    return this;
  }

  expForNextLevel(): number {
    return this.level * 5;
  }

  deathExp(): number {
    return this.level * 5;
  }

  playAttackSound() {
    MusicResources.Sword.play();
  }
}

export class Bow extends CharacterClass {
  public idleSheet: SpriteSheet;
  public atkSheet: SpriteSheet;
  public walkSheet: SpriteSheet;

  public moveRange = { inner: 4, outer: 4 };
  public defence = { magic: 2, physical: 2 };
  public attack = { range: 4, magicalDamage: 0, physicalDamage: 20 };
  public health = { maxHealth: 30, healOnNoMove: 15 };

  constructor(controllable: boolean) {
    super();
    if (controllable) {
      this.idleSheet = new SpriteSheet(Resources.BowIdle, 4, 1, 40, 40);
      this.atkSheet = new SpriteSheet(Resources.BowAtk, 6, 1, 40, 40);
      this.walkSheet = new SpriteSheet(Resources.BowWalk, 6, 1, 40, 40);
    } else {
      this.idleSheet = new SpriteSheet(Resources.EnemyBowIdle, 4, 1, 40, 40);
      this.atkSheet = new SpriteSheet(Resources.EnemyBowAtk, 6, 1, 40, 40);
      this.walkSheet = new SpriteSheet(Resources.EnemyBowWalk, 6, 1, 40, 40);
    }
  }

  levelUp(n: number = 1): Bow {
    for (let i = 0; i < n; i++) {
      if (this.level % 5 === 0) {
        this.moveRange.inner += 1;
        this.moveRange.outer += 1;
      }
      this.defence.magic += 3;
      this.defence.physical += 3;
      this.attack.physicalDamage += 10;
      this.health.maxHealth += 10;
      this.health.healOnNoMove += 10;
      this.level += 1;
    }
    return this;
  }

  expForNextLevel(): number {
    return this.level * 5;
  }

  deathExp(): number {
    return this.level * 5;
  }

  playAttackSound() {
    MusicResources.Bow.play();
  }
}

export class Magic extends CharacterClass {
  public idleSheet: SpriteSheet;
  public atkSheet: SpriteSheet;
  public walkSheet: SpriteSheet;

  public moveRange = { inner: 2, outer: 2 };
  public defence = { magic: 10, physical: 2 };
  public attack = { range: 5, magicalDamage: 20, physicalDamage: 0 };
  public health = { maxHealth: 30, healOnNoMove: 10 };

  constructor(controllable: boolean) {
    super();
    if (controllable) {
      this.idleSheet = new SpriteSheet(Resources.MagicIdle, 4, 1, 40, 40);
      this.atkSheet = new SpriteSheet(Resources.MagicAtk, 6, 1, 40, 40);
      this.walkSheet = new SpriteSheet(Resources.MagicWalk, 6, 1, 40, 40);
    } else {
      this.idleSheet = new SpriteSheet(Resources.EnemyMagicIdle, 4, 1, 40, 40);
      this.atkSheet = new SpriteSheet(Resources.EnemyMagicAtk, 6, 1, 40, 40);
      this.walkSheet = new SpriteSheet(Resources.EnemyMagicWalk, 6, 1, 40, 40);
    }
  }

  levelUp(n: number = 1): Magic {
    for (let i = 0; i < n; i++) {
      if (this.level % 5 === 0) {
        this.moveRange.inner += 1;
        this.moveRange.outer += 1;
      }
      this.defence.magic += 5;
      this.defence.physical += 2;
      this.attack.magicalDamage += 10;
      this.health.maxHealth += 10;
      this.health.healOnNoMove += 5;
      this.level += 1;
    }
    return this;
  }

  expForNextLevel(): number {
    return this.level * 5;
  }

  deathExp(): number {
    return this.level * 5;
  }

  playAttackSound() {
    MusicResources.Magic.play();
  }
}
