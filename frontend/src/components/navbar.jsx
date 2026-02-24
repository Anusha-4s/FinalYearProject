import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="Venus" />
        <h1>Venus Enterprises</h1>
      </div>

      <div className="nav-icons">
        <button onClick={() => navigate("/wishlist")}>❤</button>

        <button className="cart-icon" onClick={() => navigate("/cart")}>
          🛒
          {count > 0 && <span className="cart-count">{count}</span>}
        </button>
      </div>
    </div>
  );
}