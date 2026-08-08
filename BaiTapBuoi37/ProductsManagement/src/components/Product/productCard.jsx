import "../../App.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product, onClickAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();

    onClickAddToCart(product.id);
  };

  return (
    <div onClick={handleCardClick} className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3>{product.title}</h3>
        <p className="description">{product.description}</p>
        <div className="product-rating">
          ⭐ {product.rating.rate} ({product.rating.count})
        </div>
        <div className="product-bottom">
          <strong>${product.price}</strong>

          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
