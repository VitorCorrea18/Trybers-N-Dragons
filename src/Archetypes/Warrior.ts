import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energytype: EnergyType;
  private static _createdArchetypeInstances = 0;
  constructor(name:string) {
    super(name);
    this._energytype = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType() {
    return this._energytype;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}