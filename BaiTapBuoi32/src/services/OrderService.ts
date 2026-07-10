import { Order, OrderStatus } from "../models/Orders";
import { Customer } from "../models/Customers";
import { OrderItem } from "../models/OrderItems";
import { ProductService } from "./ProductService";
export class OrderService {
  private _orders: Order[] = [];

  constructor(private productService: ProductService) {}

  createOrder(customer: Customer): Order {
    const newOrder = new Order(customer);
    this._orders.push(newOrder);
    return newOrder;
  }

  addProduct(orderId: string, productId: string, quantity: number): void {
    const order = this.findOrder(orderId);
    if (!order) throw new Error("Order not found");

    const product = this.productService.findProductById(productId);
    if (!product) throw new Error("Product not found");

    const item = new OrderItem(product, quantity, product.price * quantity);
    order.addItem(item);
  }

  removeProduct(orderId: string, productId: string): void {
    const order = this.findOrder(orderId);
    if (!order) throw new Error("Order not found");
    order.removeItem(productId);
  }

  checkout(orderId: string): void {
    const order = this.findOrder(orderId);
    if (!order) throw new Error("Order not found");
    order.status = OrderStatus.PAID;
  }

  cancelOrder(orderId: string): void {
    const order = this.findOrder(orderId);
    if (!order) throw new Error("Order not found");
    order.status = OrderStatus.CANCELLED;
  }

  findOrder(orderId: string): Order | undefined {
    return this._orders.find((o) => o.id === orderId);
  }

  getOrders(): Order[] {
    return [...this._orders];
  }

  printOrders(): void {
    if (this._orders.length === 0) {
      console.log("Danh sách đơn hàng trống.");
      return;
    }
    this._orders.forEach((o) => o.printInvoice());
  }
}
