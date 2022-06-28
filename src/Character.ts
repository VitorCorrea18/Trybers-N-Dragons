import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strenght: number;
  private _defence: number;
  private _dexterity: number;
  private _energy:Energy;
  private _name: string;

  constructor(name:string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strenght = getRandomInt(1, 10);
    this._defence = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, amount: getRandomInt(1, 10),
    };
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strenght;
  }

  get defense() {
    return this._defence;
  }

  get energy() {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  get dexterity() {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this._defence;
    if (damage > 0) {
      const health = this._lifePoints - damage;
      this._lifePoints = (health <= 0) ? -1 : health;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this._strenght;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strenght += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defence += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const damage = this._energy.amount;
    enemy.receiveDamage(damage);
  }
}