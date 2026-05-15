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

function findTopProduct(products, orders) {
  const revenueMap = {};
  const priceMap = {};
  for (const p of products) {
    priceMap[p.id] = p.price;
  }

  for (const order of orders) {
    for (const item of order.items) {
      const pid = item.productId;
      const amount = item.quantity * (priceMap[pid] || 0);
      if (revenueMap[pid]) {
        revenueMap[pid] += amount;
      } else {
        revenueMap[pid] = amount;
      }
    }
  }

  let maxRevenue = -1;
  let topProductId = null;

  for (const pid in revenueMap) {
    if (revenueMap[pid] > maxRevenue) {
      maxRevenue = revenueMap[pid];
      topProductId = parseInt(pid);
    }
  }

  const topProductInfo = products.find((p) => p.id === topProductId);

  return {
    name: topProductInfo ? topProductInfo.name : "Unknown",
    totalRevenue: maxRevenue,
  };
}

const result = findTopProduct(products, orders);
console.log("Kết quả:", result);
