import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import urlRouter from "./routes/url.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", urlRouter);

app.listen(5050, (req, res) => {
  console.log("Server is running on port 5050");
});
// http://localhost:5050/api/url/save
