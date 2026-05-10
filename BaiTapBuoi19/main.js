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

function getBestSellingProduct(products, orders) {
  let productRevenues = [];
  for (let i = 0; i < products.length; i++) {
    productRevenues[i] = 0;
  }

  for (let i = 0; i < orders.length; i++) {
    let currentOrder = orders[i];
    let orderItems = currentOrder.items;

    for (let j = 0; j < orderItems.length; j++) {
      let currentItem = orderItems[j];

      for (let k = 0; k < products.length; k++) {
        if (products[k].id === currentItem.productId) {
          let itemRevenue = products[k].price * currentItem.quantity;
          productRevenues[k] += itemRevenue;
        }
      }
    }
  }

  let maxRevenue = productRevenues[0];
  let maxIndex = 0;

  for (let i = 1; i < productRevenues.length; i++) {
    if (productRevenues[i] > maxRevenue) {
      maxRevenue = productRevenues[i];
      maxIndex = i;
    }
  }

  return {
    name: products[maxIndex].name,
    totalRevenue: maxRevenue,
  };
}

const result = getBestSellingProduct(products, orders);
console.log("Sản phẩm có doanh thu cao nhất là:", result.name);
console.log("Với tổng số tiền là:", result.totalRevenue);
