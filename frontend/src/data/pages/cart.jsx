import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

export default function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(stored);
  }, []);

  const updateStorage = (updated) => {
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    updateStorage(updated);
  };

  const increaseQty = (index) => {
    const updated = [...items];
    updated[index].qty = (updated[index].qty || 1) + 1;
    updateStorage(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...items];
    if ((updated[index].qty || 1) > 1) {
      updated[index].qty -= 1;
      updateStorage(updated);
    }
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1 className="page-title">My Cart</h1>

        {items.length === 0 ? (
          <p className="empty-msg">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-grid">
              {items.map((item, index) => (
                <div className="cart-card" key={index}>
                  <img
                    src={`http://localhost:5001${item.image}`}
                    alt={item.name}
                  />

                  <h3>{item.name}</h3>

                  <p className="price">
                    ₹{item.price * (item.qty || 1)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(index)}>-</button>
                    <span>{item.qty || 1}</span>
                    <button onClick={() => increaseQty(index)}>+</button>
                  </div>

                  <div className="cart-actions">
                    <button
                      className="buy-btn"
                      onClick={() =>
                        navigate(`/product/${encodeURIComponent(item.name)}`)
                      }
                    >
                      View
                    </button>

                    <button
                      className="remove-btn"
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: ₹{total}</h2>
              <button className="buy-btn checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}