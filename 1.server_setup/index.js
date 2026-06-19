import express from "express";

const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.send("Hello world this is our first server through js");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
