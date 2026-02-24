
export default function SearchBar({ search, setSearch }) {
return (
<input
className="search"
placeholder="Search products..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
);
}
