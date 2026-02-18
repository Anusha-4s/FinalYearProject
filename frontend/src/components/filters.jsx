export default function Filters({ category, setCategory, price, setPrice }) {
  return (
    <div className="filters">

      {/* CATEGORY */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Wooden">Wooden</option>
        <option value="Acrylic">Acrylic</option>
        <option value="Metal">Metal</option>
        <option value="Gifts">Gifts</option>
        <option value="Mementos">Mementos</option>
        <option value="Marble">Marble</option>
      </select>

      {/* PRICE */}
      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="All">All Prices</option>
        <option value="1000">Below ₹1000</option>
        <option value="2000">Below ₹2000</option>
        <option value="5000">Below ₹5000</option>
      </select>

    </div>
  );
}

