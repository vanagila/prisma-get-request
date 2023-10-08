export class Weapon {
  constructor(
    private _id: string,
    private _caliber: number,
    private _name: string,
    private _createdAt: Date,
    private _updatedAt: Date,
    private _type?: number,
    private _serialNumber?: string,
    private _lenght?: number,
    private _weight?: number,
    private _description?: string
  ) {}

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      type: this._type,
      description: this._description,
    };
  }
}
