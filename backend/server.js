import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/products.js";

const app = express();

app.use(cors());
app.use(express.json());

// serve images
app.use("/images", express.static(path.join(process.cwd(), "public/images")));

app.use("/api/products", productRoutes);

app.get("/", (req,res)=>{
  res.send("Backend working");
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
