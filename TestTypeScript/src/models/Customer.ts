export interface ICustomer {
  id: string;
  name: string;
  tax: string;
  address: string;
}

export class Customer implements ICustomer {
  constructor(
    private _id: string,
    private _name: string,
    private _tax: string,
    private _address: string,
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get tax(): string {
    return this._tax;
  }
  get address(): string {
    return this._address;
  }

  set name(value: string) {
    this._name = value;
  }
  set tax(value: string) {
    this._tax = value;
  }
  set address(value: string) {
    this._address = value;
  }

  toString() {
    return `Customer [id=${this._id}, name=${this._name}, tax=${this._tax}, address=${this._address}]`;
  }
}
