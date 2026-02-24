
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./data/pages/home";
import ProductDetails from "./data/pages/productdetails";
import Wishlist from "./data/pages/wishlist";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:name" element={<ProductDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  </BrowserRouter>
);
