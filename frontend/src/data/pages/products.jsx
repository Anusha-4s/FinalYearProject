import { useState, useEffect } from "react";
import products from "../data/products";
import Filters from "../components/filters";
import ProductCard from "../components/productcard";
import Searchbar from "../components/searchbar";

function Products() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDark = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    setDarkMode(isDark);
  };

  const filteredProducts = products.filter((p) => {
    const categoryMatch = category === "" || p.category === category;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());

    let priceMatch = true;
    if (price === "500-1000") priceMatch = p.price >= 500 && p.price <= 1000;
    if (price === "1000-1500") priceMatch = p.price > 1000 && p.price <= 1500;
    if (price === "1500-2000") priceMatch = p.price > 1500 && p.price <= 2000;
    if (price === "2000+") priceMatch = p.price > 2000;

    return categoryMatch && priceMatch && searchMatch;
  });

  return (
    <div className="container fade-in">

      {/* Search + Dark Toggle Row */}
      <div className="search-dark-row">
        <Searchbar search={search} setSearch={setSearch} />

        <button
          className="dark-toggle-toolbar"
          onClick={toggleDark}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <Filters setCategory={setCategory} setPrice={setPrice} />

      <div className="grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}

export default Products;