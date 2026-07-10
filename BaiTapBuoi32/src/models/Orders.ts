import { v7 as uuidv7 } from "uuid";
import { Customer } from "./Customers";
import { OrderItem } from "./OrderItems";

export enum OrderStatus {
  NEW = "NEW",
  PAID = "PAID",
  CANCELLED = "CANCELLED",
}

export class Order {
  private _id: string = uuidv7();
  private _items: OrderItem[] = [];
  private _createdAt: Date = new Date();
  private _status: OrderStatus = OrderStatus.NEW;

  constructor(private _customer: Customer) {}

  get id(): string {
    return this._id;
  }
  get customer(): Customer {
    return this._customer;
  }
  get items(): OrderItem[] {
    return [...this._items];
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get status(): OrderStatus {
    return this._status;
  }
  set status(value: OrderStatus) {
    this._status = value;
  }

  addItem(item: OrderItem): void {
    if (this._status !== OrderStatus.NEW) {
      throw new Error(
        "Cannot add items to an order that is not in NEW status.",
      );
    }
    this._items.push(item);
  }

  removeItem(productId: string): void {
    if (this._status !== OrderStatus.NEW) {
      throw new Error(
        "Cannot remove items from an order that is not in NEW status.",
      );
    }
    this._items = this._items.filter((item) => item.product.id !== productId);
  }

  calculateTotal(): number {
    return this._items.reduce((total, item) => total + item.getTotal(), 0);
  }

  printInvoice(): void {
    console.log("--- INVOICE ---");
    console.log(`Order ID: ${this._id}`);
    console.log(`Customer: ${this._customer.name}`);
    console.log(`Date: ${this._createdAt.toISOString()}`);
    console.log("Items:");
    this._items.forEach((item) => {
      console.log(
        `- ${item.product.name} x ${item.quantity}: $${item.getTotal().toFixed(2)}`,
      );
    });
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    console.log("----------------");
  }
}
