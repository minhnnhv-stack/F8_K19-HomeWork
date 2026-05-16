const products = [
  { id: 1, name: "iPhone", price: 2000 },
  { id: 2, name: "Samsung", price: 1500 },
  { id: 3, name: "Xiaomi", price: 1000 },
  { id: 4, name: "Oppo", price: 1200 },
];

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 },
    ],
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],
  },
];

const findTopProduct = (products, orders) => {
  const productQuantities = {};
  orders.forEach((order) => {
    order.items.forEach((item) => {
      if (productQuantities[item.productId]) {
        productQuantities[item.productId] += item.quantity;
      } else {
        productQuantities[item.productId] = item.quantity;
      }
    });
  });

  const productRevenues = products.map((product) => {
    const totalQuantity = productQuantities[product.id] || 0;
    return {
      id: product.id,
      name: product.name,
      totalRevenue: totalQuantity * product.price,
    };
  });

  let topProduct = productRevenues[0];
  productRevenues.forEach((proRve) => {
    if (proRve.totalRevenue > topProduct.totalRevenue) topProduct = proRve;
  });
  return topProduct;
};
console.log(findTopProduct(products, orders));
