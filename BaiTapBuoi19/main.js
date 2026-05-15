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
  // 1. Tạo HashMap lưu doanh thu: { productId: totalRevenue }
  const revenueMap = {};

  // 2. Tạo nhanh một bảng tra cứu giá sản phẩm: { id: price }
  const priceMap = {};
  for (const p of products) {
    priceMap[p.id] = p.price;
  }

  // 3. Duyệt qua các đơn hàng để tính doanh thu vào HashMap
  for (const order of orders) {
    for (const item of order.items) {
      const pid = item.productId;
      const amount = item.quantity * (priceMap[pid] || 0);

      // Tích lũy doanh thu vào HashMap
      if (revenueMap[pid]) {
        revenueMap[pid] += amount;
      } else {
        revenueMap[pid] = amount;
      }
    }
  }

  // 4. Tìm sản phẩm có doanh thu lớn nhất từ HashMap
  let maxRevenue = -1;
  let topProductId = null;

  for (const pid in revenueMap) {
    if (revenueMap[pid] > maxRevenue) {
      maxRevenue = revenueMap[pid];
      topProductId = parseInt(pid);
    }
  }

  // 5. Tìm lại thông tin tên sản phẩm để trả về
  const topProductInfo = products.find((p) => p.id === topProductId);

  return {
    name: topProductInfo ? topProductInfo.name : "Unknown",
    totalRevenue: maxRevenue,
  };
}

// Chạy thử với dữ liệu của bạn
const result = findTopProduct(products, orders);
console.log("Kết quả:", result);
