import express from "express";
const app = express();
app.use(express.json());
// creating dummy datebase with array
let products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    desc: "This is product 1 dummy data",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    desc: "This is product 2 dummy data",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    desc: "This is product 3 dummy data",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    desc: "This is product 3 dummy data",
  },
];
//  get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// create product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// for edit
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;

  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

//  delete product

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== parseInt(id));
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
