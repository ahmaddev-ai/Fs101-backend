import Product from "../model/Product.js";

export const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
    let products;
    if (name) {
      products = await Product.find({
        name: {
          $regex: name,
          $options: "i",
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProductFields = req.body;
    const newProduct = await Product(newProductFields);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const updatedProductFields = req.body;
    const updatedProduct = await Product.findOneAndUpdate(
      { id: id },
      updatedProductFields
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error editing product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndDelete({ id: id });
    res.status(204).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
