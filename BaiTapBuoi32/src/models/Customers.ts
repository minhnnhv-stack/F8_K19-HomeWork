import { v7 as uuidv7 } from "uuid";

export class Customer {
  private _id: string = uuidv7();
  constructor(
    private _name: string,
    private _phone: string,
    private _address: string,
  ) {}
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get phone(): string {
    return this._phone;
  }
  get address(): string {
    return this.address;
  }
  set name(value: string) {
    this._name = value;
  }
  updatePhone(value: string) {
    this._phone = value;
  }
  updateAddress(value: string) {
    this._address = value;
  }
  toString() {
    return `Customer [id=${this._id}, name=${this._name}, phone=${this._phone}, address=${this._address}]`;
  }
}
