import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductCard from "../../components/productcard";
import Filters from "../../components/filters";
import SearchBar from "../../components/searchbar";

export default function Home() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (search !== "")
      temp = temp.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    if (category !== "All")
      temp = temp.filter(p => p.category === category);

    if (price !== "All")
      temp = temp.filter(p => p.price <= Number(price));

    setFiltered(temp);
  }, [search, category, price, products]);

  return (
    <div className="container">

      <div className="page-header">
        <h1>Products</h1>

        <div className="top-buttons">
          <button onClick={() => navigate("/wishlist")}>wishlist</button>
          <button onClick={() => navigate("/cart")}>cart</button>
        </div>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters
        category={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
      />

      <div className="grid">
        {filtered.map(p => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>

    </div>
  );
}
