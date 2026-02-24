import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { name } = useParams();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const [openSpec, setOpenSpec] = useState(true);
  const [openCustom, setOpenCustom] = useState(false);
  const [openShip, setOpenShip] = useState(false);

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const decoded = decodeURIComponent(name);

    fetch(`http://localhost:5001/api/products/name/${decoded}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);

        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const exists = wishlist.find(p => p.name === data.name);
        setIsWishlisted(!!exists);
      })
      .catch(err => console.log(err));
  }, [name]);

  /* ---------------- WISHLIST ---------------- */

  const toggleWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      wishlist = wishlist.filter(p => p.name !== product.name);
    } else {
      wishlist.push(product);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setIsWishlisted(!isWishlisted);
  };

  /* ---------------- CART ---------------- */

  const addToCart = () => {
    if (qty > product.stock) {
      alert("Cannot add more than available stock 🚫");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(p => p.name === product.name);

    if (existingIndex !== -1) {
      const newQty = (cart[existingIndex].qty || 1) + qty;

      if (newQty > product.stock) {
        alert("Exceeds available stock 🚫");
        return;
      }

      cart[existingIndex].qty = newQty;
    } else {
      cart.push({ ...product, qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  if (!product) return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  return (
    <div className="product-page">

      {/* LEFT SIDE */}
      <div className="product-left">

        {/* 🔹 BREADCRUMB ABOVE IMAGE */}
        <div className="details-breadcrumb">
          Home &nbsp; &gt; &nbsp;
          {product.category} &nbsp; &gt; &nbsp;
          <span>{product.name}</span>
        </div>

        <div className="details-image-wrapper">

          <button
            className={`details-heart ${isWishlisted ? "active-heart" : ""}`}
            onClick={toggleWishlist}
          >
            {isWishlisted ? "❤" : "♡"}
          </button>

          <img
            src={`http://localhost:5001${product.image}`}
            alt={product.name}
          />

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="product-right">

        <h1 className="product-title">{product.name}</h1>
        <h2 className="product-price">₹{product.price}</h2>

        <p className="product-meta"><b>Category:</b> {product.category}</p>
        <p className="product-meta"><b>Stock:</b> {product.stock}</p>

        {/* QUANTITY */}
        <div className="quantity">
          <button onClick={() => setQty(q => Math.max(1, q - 1))}>
            -
          </button>

          <span>{qty}</span>

          <button
            onClick={() => {
              if (qty >= product.stock) {
                alert("Stock limit reached 🚫");
                return;
              }
              setQty(q => q + 1);
            }}
            disabled={qty >= product.stock}
          >
            +
          </button>
        </div>

        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>

        <button className="buy-btn">
          Buy Now
        </button>

        {/* DESCRIPTION */}
        <div className="description">
          A premium handcrafted {product.category.toLowerCase()} product
          designed for elegance and durability. Perfect for gifting and
          personal use.
        </div>

        {/* SPECIFICATIONS */}
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setOpenSpec(!openSpec)}
          >
            Specifications {openSpec ? "▲" : "▼"}
          </div>

          {openSpec && (
            <div className="accordion-body">
              <p><b>Material:</b> High-quality {product.category}</p>
              <p><b>Typical Size:</b> 12x6 in, 14x8 in, 18x10 in</p>
              <p><b>Colour:</b> Natural / Custom</p>
              <p><b>Care:</b> Wipe with dry cloth</p>
            </div>
          )}
        </div>

        {/* CUSTOMIZATION */}
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setOpenCustom(!openCustom)}
          >
            Customization Options {openCustom ? "▲" : "▼"}
          </div>

          {openCustom && (
            <div className="accordion-body">

              <p><b>Font Style</b></p>
              <div className="pill-group">
                {["Classic", "Modern", "Elegant"].map(font => (
                  <button key={font} className="pill">
                    {font}
                  </button>
                ))}
              </div>

              <p style={{ marginTop: "15px" }}><b>Packaging</b></p>
              <div className="pill-group">
                {["Standard", "Gift Box"].map(pack => (
                  <button key={pack} className="pill">
                    {pack}
                  </button>
                ))}
              </div>

              <button className="more-custom-btn">
                More Customization Options
              </button>

            </div>
          )}
        </div>

        {/* SHIPPING */}
        <div className="accordion">
          <div
            className="accordion-header"
            onClick={() => setOpenShip(!openShip)}
          >
            Shipping Details {openShip ? "▲" : "▼"}
          </div>

          {openShip && (
            <div className="accordion-body">
              <p><b>Return:</b> 10 days before shipment dispatch</p>
              <p><b>Delivery:</b> Based on pincode area</p>
              <p><b>Shipping Time:</b> 4-7 business days</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}