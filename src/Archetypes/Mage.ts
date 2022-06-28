import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;
  constructor(name:string) {
    super(name);
    this._energytype = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType(): string {
    return this._energytype;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}