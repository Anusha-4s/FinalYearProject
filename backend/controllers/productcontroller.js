import db from "../config/db.js";

/* ===========================
   GET ALL PRODUCTS
=========================== */
export const getAllProducts = (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
};

/* ===========================
   GET PRODUCT BY ID
=========================== */
export const getProductById = (req, res) => {
  const sql = "SELECT * FROM products WHERE id = ?";

  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result[0]);
  });
};
