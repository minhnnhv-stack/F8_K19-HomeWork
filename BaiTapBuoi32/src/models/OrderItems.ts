import { Product } from "./Products";
import { v7 as uuidv7 } from "uuid";

export class OrderItem {
  private _id: string = uuidv7();

  constructor(
    private _product: Product,
    private _quantity: number,
    private _price: number,
  ) {
    this._price = this._product.price * this._quantity;
  }

  get id(): string {
    return this._id;
  }
  get product(): Product {
    return this._product;
  }
  get quantity(): number {
    return this._quantity;
  }
  get price(): number {
    return this._price;
  }

  set quantity(value: number) {
    if (value < 0) {
      throw new Error("Quantity cannot be negative");
    }
    this._quantity = value;
  }

  getTotal(): number {
    return this._product.price * this._quantity;
  }
  toString(): string {
    return `OrderItem [id=${this._id}, product=${this._product.name}, quantity=${this._quantity}, price=${this._price}]`;
  }
}
