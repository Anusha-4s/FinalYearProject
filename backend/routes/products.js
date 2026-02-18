import express from "express";
import db from "../config/db.js";

const router = express.Router();

/* ================================
   GET ALL PRODUCTS  (Home page)
   URL: http://localhost:5001/api/products
================================ */
router.get("/", (req, res) => {

  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result);
  });

});


/* ================================
   GET PRODUCT BY NAME (Details page)
   URL: http://localhost:5001/api/products/name/Wooden%20Wall%20Frame
================================ */
router.get("/name/:name", (req, res) => {

  const productName = req.params.name;

  const sql = "SELECT * FROM products WHERE name = ?";

  db.query(sql, [productName], (err, result) => {

    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(result[0]);
  });

});

export default router;
