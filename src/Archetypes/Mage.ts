import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}