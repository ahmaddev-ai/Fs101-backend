import express from "express";
import cors from "cors";
import { ConnectDb } from "./utils/db.js";
import productRoutes from "./routes/product.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json()); // this is for parsing application/json data in request body
app.use(cors());
const PORT = 8000;

// connect database
ConnectDb();

app.use("/api/v1", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
