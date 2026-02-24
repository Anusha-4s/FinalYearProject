import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

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
    <>
      <Navbar />

      <div className="wishlist-page">
        <h1 className="page-title">My Wishlist</h1>

        {items.length === 0 ? (
          <p className="empty-msg">Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-grid">
            {items.map((item, i) => (
              <div className="wishlist-card" key={i}>
                <img
                  src={`http://localhost:5001${item.image}`}
                  alt={item.name}
                />

                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="wishlist-actions">
                  <button
                    className="buy-btn"
                    onClick={() =>
                      navigate(`/product/${encodeURIComponent(item.name)}`)
                    }
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
            ))}
          </div>
        )}
      </div>
    </>
  );
}