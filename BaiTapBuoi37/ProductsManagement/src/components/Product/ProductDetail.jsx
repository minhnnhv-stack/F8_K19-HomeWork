import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { userService } from "../../services/userService";
import Header from "../Header/header.jsx";

const ProductDetail = ({}) => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
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

  useEffect(() => {
    const currentProduct = products.find(
      (item) => item.id === Number(productId),
    );

    setProduct(currentProduct);
  }, [products, productId]);
  if (!product) {
    return <p>Đang tải sản phẩm...</p>;
  }
  const featuredProducts = products
    .filter((item) => item.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <>
      <Header cartProducts={cartProducts} />

      <main className="container">
        <section className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-detail-info">
            <div className="product-category">{product.category}</div>

            <h1>{product.title}</h1>

            <p>{product.description}</p>

            <div className="product-rating">
              ⭐ {product.rating.rate} ({product.rating.count})
            </div>

            <strong>${product.price}</strong>
          </div>
        </section>

        <section className="featured-products">
          <h2>Sản phẩm nổi bật</h2>

          <div className="product-grid">
            {featuredProducts.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.title} />

                <h3>{item.title}</h3>

                <strong>${item.price}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
