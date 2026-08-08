import "../../App.css";

const Header = ({ cartProducts }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          Shop<span>.</span>
        </div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/categories">Categories</a>
        </nav>

        <div className="cart">
          <button className="cart-button">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            <span className="cart-badge">{cartProducts.length}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
