import { useEffect, useState } from "react";
import { userService } from "../../services/userService";
import ProductCard from "./productCard";
import Header from "../Header/header.jsx";

function productGrid() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await userService.getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (productId) => {
    if (cartProducts.includes(productId)) return;
    setCartProducts([...cartProducts, productId]);
  };

  console.log("cartProducts:", cartProducts.length);
  return (
    <>
      <Header cartProducts={cartProducts} />
      <main className="container">
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} onClickAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </>
  );
}

export default productGrid;
