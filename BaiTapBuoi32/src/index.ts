import { Product } from "./models/Products";
import { Customer } from "./models/Customers";
import { Order } from "./models/Orders";
import { OrderItem } from "./models/OrderItems";

import { ProductService } from "./services/ProductService";
import { CustomerService } from "./services/CustomerService";
import { OrderService } from "./services/OrderService";

//ThemSP
const product1 = new Product("Laptop", 1500, 10);
const product2 = new Product("Mouse", 50, 5);

const myProductService = new ProductService();
myProductService.addProduct(product1);
myProductService.addProduct(product2);

myProductService.printProducts();
//Them KH
const customer1 = new Customer("John Doe", "123456789", "123 Main St");
const customer2 = new Customer("Jane Smith", "098765432", "456 Elm St");

const myCustomerService = new CustomerService();
myCustomerService.addCustomer(customer1);
myCustomerService.addCustomer(customer2);

myCustomerService.printCustomers();

// THem Don hang
const myOrderService = new OrderService(myProductService);
const order1 = myOrderService.createOrder(customer1);
const order2 = myOrderService.createOrder(customer2);

myOrderService.addProduct(order1.id, product1.id, 2);
myOrderService.addProduct(order2.id, product2.id, 3);

myOrderService.printOrders();
