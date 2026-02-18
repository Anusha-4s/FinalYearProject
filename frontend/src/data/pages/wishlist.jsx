import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const removeItem = (name) => {
    const updated = items.filter(p => p.name !== name);
    setItems(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="container">
      <h1>wishlist</h1>

      <div className="grid">
        {items.map((item, i) => (
          <div className="product-card" key={i}>
            <div className="product-image">
              <img src={`http://localhost:5001${item.image}`} alt={item.name} />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>

              <div className="page-actions">
                <button
                  className="buy-btn"
                  onClick={() => navigate(`/product/${encodeURIComponent(item.name)}`)}
                >
                  Buy Now
                </button>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.name)}
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
