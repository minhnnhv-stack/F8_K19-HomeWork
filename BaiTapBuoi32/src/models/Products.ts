import { v7 as uuidv7 } from "uuid";

export class Product {
  private _id: string = uuidv7();
  constructor(
    private _name: string,
    private _price: number,
    private _stock: number,
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }
  get stock(): number {
    return this._stock;
  }

  set name(value: string) {
    this._name = value;
  }
  set price(value: number) {
    if (value < 0) {
      throw new Error("Price cannot be negative");
    }
    this._price = value;
  }

  increaseStock(amount: number) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }
    this._stock += amount;
  }
  decreaseStock(amount: number) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }
    if (this._stock - amount < 0) {
      throw new Error("Insufficient stock");
    }
    this._stock -= amount;
  }
  toString() {
    return `Product [id=${this._id}, name=${this._name}, price=${this._price}, stock=${this._stock}]`;
  }
}

const product1 = new Product("Laptop", 1500, 10);
product1.id;
product1.name = "Gaming Laptop";
