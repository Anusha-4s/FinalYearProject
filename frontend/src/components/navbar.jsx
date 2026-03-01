import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  /* ---------------- DARK MODE ---------------- */
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    setDarkMode(isDark);
  };

  return (
    <div className="navbar">
      
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="Venus" />
        <h1>Venus Enterprises</h1>
      </div>

      <div className="nav-icons">

        {/* Wishlist */}
        <button 
          className="nav-btn"
          onClick={() => navigate("/wishlist")}
        >
          ❤
        </button>

        {/* Cart */}
        <button 
          className="nav-btn"
          onClick={() => navigate("/cart")}
        >
          🛒
        </button>

        {/* Dark Mode Toggle */}
        <button 
          className="nav-btn"
          onClick={toggleDarkMode}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>
    </div>
  );
}