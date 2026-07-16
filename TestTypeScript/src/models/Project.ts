export interface IProject {
  id: string;
  customerId: string;
  employeeId: string;
}

export class Project implements IProject {
  constructor(
    private _id: string,
    private _customerId: string,
    private _employeeId: string,
  ) {}

  get id(): string {
    return this._id;
  }
  get customerId(): string {
    return this._customerId;
  }
  get employeeId(): string {
    return this._employeeId;
  }

  set customerId(value: string) {
    this._customerId = value;
  }
  set employeeId(value: string) {
    this._employeeId = value;
  }
}
