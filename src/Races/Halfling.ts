import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints:number;
  private static _createdRacesInstances = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}

// https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/