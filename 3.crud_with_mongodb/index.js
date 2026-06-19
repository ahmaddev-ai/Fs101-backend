import express from "express";
import mongoose from "mongoose";
import Product from "./model/Product.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8000;

// mongodb+srv://ah55677435_db_user:V9AY63t4DyaG1sO3@cluster0.w6eepcz.mongodb.net/?appName=Cluster0

// function for mongodb connection
async function ConnectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://ah55677435_db_user:V9AY63t4DyaG1sO3@cluster0.w6eepcz.mongodb.net/"
    );
    console.log("connection connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

ConnectDb();

// get all products from database

app.get("/products", async (req, res) => {
  try {
    const allproducts = await Product.find();
    res.status(200).json(allproducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// create product in database
app.post("/products", async (req, res) => {
  try {
    const newProductFields = req.body;
    const newProduct = await Product(newProductFields);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// delete product from database
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndDelete({ id: id });
    res.status(204).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
