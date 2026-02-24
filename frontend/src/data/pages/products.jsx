
import { useState } from "react";
import products from "../data/products";
import filters from "../components/filters";
import productCard from "../components/productcard";
import searchbar from "../components/searchbar";

function Products() {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");

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
      <searchbar search={search} setSearch={setSearch} />
      <filters setCategory={setCategory} setPrice={setPrice} />

      <div className="grid">
        {filteredProducts.map((p) => (
          <productcard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default products;
