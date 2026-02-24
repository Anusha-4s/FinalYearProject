import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/productcard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("low");
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  const filtered = products
    .filter(p => {
      const categoryMatch = category === "All" || p.category === category;
      const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());
      const priceMatch = maxPrice === "" || p.price <= Number(maxPrice);
      const stockMatch = !inStockOnly || p.stock > 0;

      return categoryMatch && searchMatch && priceMatch && stockMatch;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Navbar />

      <div className="products-header">
        <h1>Products</h1>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">

        <div className="category-tabs">
          {["All","Wooden","Acrylic","Metal","Gifts","Mementos","Marble"]
            .map(cat => (
              <button
                key={cat}
                className={category === cat ? "active-tab" : ""}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
        </div>

        <div className="right-controls">

          <select onChange={(e) => setSort(e.target.value)}>
            <option value="low">Sort: Price Low to High</option>
            <option value="high">Sort: Price High to Low</option>
          </select>

          <button
            className="filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter ⚙
          </button>

          <input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* FILTER PANEL */}
      {showFilter && (
        <div className="filter-panel">
          <div>
            <label>Max Price:</label>
            <input
              type="number"
              placeholder="Enter price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
            />
            <label>In Stock Only</label>
          </div>
        </div>
      )}

      {/* PRODUCTS GRID */}
      <div className="products-container">
        {filtered.length === 0 ? (
          <div className="no-products">
            <h2>No products found</h2>
            <p>Try adjusting your filters.</p>
          </div>
        ) : (
          filtered.map(product => (
            <ProductCard key={product.name} product={product} />
          ))
        )}
      </div>
    </>
  );
}