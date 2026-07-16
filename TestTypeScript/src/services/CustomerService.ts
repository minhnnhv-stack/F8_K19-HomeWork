import { randomUUID } from "crypto";
import { type ICustomer, Customer } from "../models/Customer";

export class CustomerService {
  private customers: Customer[] = [];

  create(customer: Omit<ICustomer, "id">): Customer {
    const newCustomer = new Customer(
      randomUUID(),
      customer.name,
      customer.tax,
      customer.address,
    );
    this.customers.push(newCustomer);
    return newCustomer;
  }

  updateById(id: string, data: Partial<ICustomer>): Customer | null {
    const customer = this.customers.find((c) => c.id === id);
    if (!customer) return null;

    if (data.name !== undefined) customer.name = data.name;
    if (data.tax !== undefined) customer.tax = data.tax;
    if (data.address !== undefined) customer.address = data.address;

    return customer;
  }
}
