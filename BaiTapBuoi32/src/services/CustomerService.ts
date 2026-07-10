import { Customer } from "../models/Customers";

interface CustomerServiceI {
  addCustomer(customer: Customer): void;
  updateCustomer(
    id: string,
    data: Partial<Pick<Customer, "name" | "phone" | "address">>,
  ): void;
  deleteCustomer(id: string): void;
  findById(id: string): Customer | undefined;
  findByPhone(phone: string): Customer | undefined;
  getAllCustomers(): Customer[];
  printCustomers(): void;
}

export class CustomerService implements CustomerServiceI {
  private customers: Customer[] = [];
  addCustomer(customer: Customer) {
    const existingCustomer = this.findById(customer.id);
    if (existingCustomer) {
      throw new Error(`Customer with id ${customer.id} already exists`);
    }
    this.customers.push(customer);
  }
  updateCustomer(
    id: string,
    data: Partial<Pick<Customer, "name" | "phone" | "address">>,
  ) {
    const customer = this.findById(id);
    if (!customer) {
      throw new Error(`Customer with id ${id} not found`);
    }
    if (data.name !== undefined) {
      customer.name = data.name;
    }
    if (data.phone !== undefined) {
      customer.updatePhone(data.phone);
    }
    if (data.address !== undefined) {
      customer.updateAddress(data.address);
    }
  }
  deleteCustomer(id: string) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }
  findById(id: string): Customer | undefined {
    return this.customers.find((customer) => customer.id === id);
  }
  findByPhone(phone: string): Customer | undefined {
    return this.customers.find((customer) => customer.phone === phone);
  }
  getAllCustomers(): Customer[] {
    return [...this.customers];
  }
  printCustomers(): void {
    if (this.customers.length === 0) {
      console.log("Danh sách khách hàng trống.");
      return;
    }
    this.customers.forEach((c) => console.log(c.toString()));
  }
}
