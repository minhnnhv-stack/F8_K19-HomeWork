export interface IEmployee {
  id: string;
  name: string;
  receiveNoti(message: string): void;
}

export class Employee implements IEmployee {
  constructor(
    private _id: string,
    private _name: string,
  ) {}
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  receiveNoti(message: string): void {
    console.log(
      `[${this._id}] - [${this._name}] received notification: ${message}`,
    );
  }
}
