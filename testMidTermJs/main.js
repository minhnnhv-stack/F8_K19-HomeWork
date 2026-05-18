const employees = [
  { id: 1, name: "Alice", age: 23, status: "working" },
  { id: 3, name: "Bob", age: 25, status: "working" },
  { id: 6, name: "John", age: 27, status: "working" },
  { id: 8, name: "David", age: 23, status: "quit_job" },
  { id: 10, name: "Eve", age: 20, status: "working" },
];
const products = [
  { id: 1, name: "Phone", price: 1200 },
  { id: 2, name: "Laptop", price: 3000 },
  { id: 3, name: "Tab", price: 2000 },
  { id: 4, name: "PC", price: 800 },
  { id: 5, name: "Monitor", price: 1500 },
];
const orders = [
  { id: 1, employeeId: 1, productId: 4, quantity: 1 },
  { id: 2, employeeId: 3, productId: 2, quantity: 4 },
  { id: 3, employeeId: 1, productId: 5, quantity: 3 },
  { id: 4, employeeId: 6, productId: 1, quantity: 2 },
  { id: 5, employeeId: 3, productId: 5, quantity: 3 },
  { id: 6, employeeId: 8, productId: 1, quantity: 1 },
  { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

const productLookup = {};
products.map((product) => (productLookup[product.id] = product));

const employeeLookup = {};
employees.map((employee) => (employeeLookup[employee.id] = employee));

/**
 * Used logic for Exercises 7, 9, and 10
 */
const getEmployeeRevenueObj = () => {
  const revenueObj = {}; // Structure: { employeeId: totalRevenue }

  for (const order of orders) {
    const targetProduct = productLookup[order.productId];
    const orderRevenue =
      order.quantity * (targetProduct ? targetProduct.price : 0);

    if (revenueObj[order.employeeId]) {
      revenueObj[order.employeeId] += orderRevenue;
    } else {
      revenueObj[order.employeeId] = orderRevenue;
    }
  }
  return revenueObj;
};
const getProductQuantityObj = () => {
  const quantityObj = {}; // Structure: { productId: totalQuantity }
  for (const order of orders) {
    if (quantityObj[order.productId]) {
      quantityObj[order.productId] += order.quantity;
    } else {
      quantityObj[order.productId] = order.quantity;
    }
  }
  return quantityObj;
};

// ==========================================
// Exercise 1: Get list of working employees
// ==========================================

const getWorkingEmployees = () => {
  return employees.filter((employee) => employee.status === "working");
};
console.log("===Exercise 1: Get list of working employees===");
console.table(getWorkingEmployees(employees));

// ==========================================
// Exercise 2: Get the oldest employee
// ==========================================

const getOldestEmployee = () => {
  if (employees.length === 0) return null;
  let oldestEmployee = employees[0];
  for (const currentEmployee of employees) {
    if (currentEmployee.age > oldestEmployee.age) {
      oldestEmployee = currentEmployee;
    }
  }
  return oldestEmployee;
};
console.log("===Exercise 2: Get the oldest employee===");
console.log(getOldestEmployee(employees));

// ==========================================
// Exercise 3: Get the cheapest product
// ==========================================

const getCheapestProduct = () => {
  if (products.length === 0) return null;

  let cheapestProduct = products[0];
  for (const currentProduct of products) {
    if (currentProduct.price < cheapestProduct.price) {
      cheapestProduct = currentProduct;
    }
  }
  return cheapestProduct;
};
console.log("===Exercise 3: Get the cheapest product===");
console.log(getCheapestProduct(products));

// ==========================================
// Exercise 4: Find the top-selling product by quantity
// ==========================================

const getMostSoldProduct = () => {
  const quantityObj = getProductQuantityObj();

  let maxProductId = null;
  let maxQuantity = -1;

  for (const productId in quantityObj) {
    if (quantityObj[productId] > maxQuantity) {
      maxQuantity = quantityObj[productId];
      maxProductId = productId;
    }
  }

  const targetProduct = productLookup[maxProductId];
  return targetProduct
    ? {
        product: targetProduct,
        totalQuantity: maxQuantity,
      }
    : null;
};
console.log("===Exercise 4: Find the top-selling product by quantity===");

console.table(getMostSoldProduct());

// ==========================================
// Exercise 5: Find the product with the highest revenue
// ==========================================
const getHighestRevenueProduct = () => {
  const revenueObj = {}; // Structure: { productId: totalRevenue }

  for (const order of orders) {
    const targetProduct = productLookup[order.productId];
    const orderRevenue =
      order.quantity * (targetProduct ? targetProduct.price : 0);

    if (revenueObj[order.productId]) {
      revenueObj[order.productId] += orderRevenue;
    } else {
      revenueObj[order.productId] = orderRevenue;
    }
  }

  let maxProductId = null;
  let maxRevenue = -1;

  for (const productId in revenueObj) {
    if (revenueObj[productId] > maxRevenue) {
      maxRevenue = revenueObj[productId];
      maxProductId = productId;
    }
  }

  const quantityObj = getProductQuantityObj();
  const targetProduct = productLookup[maxProductId];

  return targetProduct
    ? {
        product: targetProduct,
        totalQuantity: quantityObj[maxProductId] || 0,
        totalRevenue: maxRevenue,
      }
    : null;
};
console.log("===Exercise 5: Find the product with the highest revenue===");
console.table(getHighestRevenueProduct());
// ==========================================
// Exercise 6: Find the employee who sold the most items (by quantity)
// ==========================================
const getTopSellingEmployee = () => {
  const quantityObj = {};

  for (const order of orders) {
    if (quantityObj[order.employeeId]) {
      quantityObj[order.employeeId] += order.quantity;
    } else {
      quantityObj[order.employeeId] = order.quantity;
    }
  }

  let maxEmployeeId = null;
  let maxQuantity = -1;

  for (const employeeId in quantityObj) {
    if (quantityObj[employeeId] > maxQuantity) {
      maxQuantity = quantityObj[employeeId];
      maxEmployeeId = employeeId;
    }
  }

  const targetEmployee = employeeLookup[maxEmployeeId];
  return targetEmployee
    ? {
        employee: targetEmployee,
        totalQuantity: maxQuantity,
      }
    : null;
};
console.log(
  "===Exercise 6: Find the employee who sold the most items (by quantity)===",
);
console.table(getTopSellingEmployee());

// ==========================================
// Exercise 7: Find the employee with the highest revenue
// ==========================================
const getHighestRevenueEmployee = () => {
  const employeeRevenueObj = getEmployeeRevenueObj();

  let maxEmployeeId = null;
  let maxRevenue = -1;

  for (const employeeId in employeeRevenueObj) {
    if (employeeRevenueObj[employeeId] > maxRevenue) {
      maxRevenue = employeeRevenueObj[employeeId];
      maxEmployeeId = employeeId;
    }
  }

  const targetEmployee = employeeLookup[maxEmployeeId];

  return targetEmployee
    ? {
        employee: targetEmployee,
        totalRevenue: maxRevenue,
      }
    : null;
};
(console.log("===Exercise 7: Find the employee with the highest revenue==="),
  console.table(getHighestRevenueEmployee()));

// ==========================================
// Exercise 8: Find the highest revenue product for each employee
// ==========================================
const getTopProductPerEmployee = () => {
  const employeeProductRevenue = {};
  for (const order of orders) {
    const targetProduct = productLookup[order.productId];
    const orderRevenue =
      order.quantity * (targetProduct ? targetProduct.price : 0);
    if (!employeeProductRevenue[order.employeeId]) {
      employeeProductRevenue[order.employeeId] = {};
    }

    const productRevenueObj = employeeProductRevenue[order.employeeId];
    if (productRevenueObj[order.productId]) {
      productRevenueObj[order.productId] += orderRevenue;
    } else {
      productRevenueObj[order.productId] = orderRevenue;
    }
  }
  const resultList = [];
  let index = 0;
  for (const employeeId in employeeProductRevenue) {
    let bestProductId = null;
    let maxRevenue = -1;

    const productDataObj = employeeProductRevenue[employeeId];

    for (const productId in productDataObj) {
      if (productDataObj[productId] > maxRevenue) {
        maxRevenue = productDataObj[productId];
        bestProductId = productId;
      }
    }

    const targetEmployee = employeeLookup[employeeId];
    const targetProduct = productLookup[bestProductId];

    if (targetEmployee) {
      resultList[index] = {
        employee: targetEmployee,
        topProduct: targetProduct,
        totalRevenue: maxRevenue,
      };
      index++;
    }
  }

  return resultList;
};
console.log(
  "===Exercise 8: Find the highest revenue product for each employee===",
);
console.log(JSON.stringify(getTopProductPerEmployee()));

// ==========================================
// Exercise 9: Tính hoa hồng 3% cho mỗi nhân viên
// ==========================================
const calculateEmployeeCommissions = () => {
  const employeeRevenueObj = getEmployeeRevenueObj();

  const commissionRate = 0.03;

  const commissionList = employees.map((employee) => {
    const totalRevenue = employeeRevenueObj[employee.id] || 0;
    return {
      employee: employee,
      totalRevenue: totalRevenue,
      commission: totalRevenue * commissionRate,
    };
  });

  return commissionList;
};
console.log("===Exercise 9: Calculate 3% commission for each employee===");
console.log(JSON.stringify(calculateEmployeeCommissions()));
// ==========================================
// // Exercise 10: Sort employees descending by revenue
// ==========================================
const sortEmployeesByRevenueDesc = () => {
  const employeeRevenueObj = getEmployeeRevenueObj();
  const sortedEmployees = [...employees].sort((employeeA, employeeB) => {
    const revenueA = employeeRevenueObj[employeeA.id] || 0;
    const revenueB = employeeRevenueObj[employeeB.id] || 0;

    return revenueB - revenueA;
  });

  return sortedEmployees;
};
console.log(" ===Exercise 10: Sort employees descending by revenue===");
console.table(sortEmployeesByRevenueDesc());
