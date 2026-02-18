import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Toast from "./toast";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const [toastMsg, setToastMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const showMessage = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
  };

  const addToWishlist = (e) => {
    e.stopPropagation();

    let list = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!list.find(p => p.name === product.name)) {
      list.push(product);
      localStorage.setItem("wishlist", JSON.stringify(list));
      showMessage(`${product.name} added to wishlist ❤`);
    } else {
      showMessage(`${product.name} already in wishlist`);
    }
  };

  const addToCart = (e) => {
    e.stopPropagation();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.find(p => p.name === product.name)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      showMessage(`${product.name} added to cart 🛒`);
    } else {
      showMessage(`${product.name} already in cart`);
    }
  };

  const buyNow = (e) => {
    e.stopPropagation();
    navigate(`/product/${encodeURIComponent(product.name)}`);
  };

  return (
    <>
      <div
        className="product-card"
        onClick={() => navigate(`/product/${encodeURIComponent(product.name)}`)}
      >
        <div className="product-image">
          <div className="wishlist-icon" onClick={addToWishlist}>❤</div>

          <img src={`http://localhost:5001${product.image}`} alt={product.name} />
        </div>

        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="price">₹{product.price}</p>

          <div className="card-buttons">
            <button className="cart-btn" onClick={addToCart}>Add to Cart</button>
            <button className="buy-btn" onClick={buyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <Toast message={toastMsg} show={showToast} setShow={setShowToast} />
    </>
  );
}

/* import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">

      <div
        className="product-image"
        onClick={() =>
          navigate(`/product/${encodeURIComponent(product.name)}`)
        }
      >
        <img
          src={`http://localhost:5001${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
      </div>

    </div>
  );
} */