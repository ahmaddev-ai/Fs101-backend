import express from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProductById,
} from "../controllers/Product.js";

const router = express.Router();

router.get("/products", getProduct);
// router.get("/products/search")
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", editProduct);
router.delete("/products/:id", deleteProduct);

export default router;
// http://localhost:8080/api/v1/products
// http://localhost:8080/api/v1/products?name=iphone
