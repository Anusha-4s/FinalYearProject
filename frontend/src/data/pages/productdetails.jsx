import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const decoded = decodeURIComponent(name);

    fetch(`http://localhost:5001/api/products/name/${decoded}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [name]);

  // ADD TO CART
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    for (let i = 0; i < qty; i++) {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  // BUY NOW
  const buyNow = () => {
    alert(`Buying ${qty} item(s)`);
  };

  if (!product) return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  return (
    <div className="product-page">

      {/* LEFT IMAGE */}
      <div className="product-left">
        <img
          src={`http://localhost:5001${product.image}`}
          alt={product.name}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="product-right">

        <h1 className="product-title">{product.name}</h1>
        <h2 className="product-price">₹{product.price}</h2>

        <p className="product-meta"><b>Category:</b> {product.category}</p>
        <p className="product-meta"><b>Stock:</b> {product.stock}</p>

        {/* QUANTITY */}
        <div className="quantity">
          <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(q => q + 1)}>+</button>
        </div>

        {/* ACTION BUTTONS */}
        <button className="cart-btn" onClick={addToCart}>
          Add to Cart
        </button>

        <button className="buy-btn" onClick={buyNow}>
          Buy Now
        </button>

        {/* DESCRIPTION */}
        <div className="description">
          <p>{product.description}</p>
        </div>

      </div>

    </div>
  );
}


/*import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const decoded = decodeURIComponent(name);

    fetch(`http://localhost:5001/api/products/name/${decoded}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [name]);

  if (!product) return <h2 style={{padding:"40px"}}>Loading...</h2>;

  return (
    <div className="product-page">

      <div className="product-left">
        <img
          src={`http://localhost:5001${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="product-right">
        <h1>{product.name}</h1>
        <h2>₹{product.price}</h2>
        <p><b>Category:</b> {product.category}</p>
        <p><b>Stock:</b> {product.stock}</p>
        <p>{product.description}</p>
      </div>

    </div>
  );
}*/