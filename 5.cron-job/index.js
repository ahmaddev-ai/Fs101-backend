// cron job
import express from "express";
import cron from "node-cron";

const app = express();

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// * * * * * *
//  seconds - minute - hour - day of month - month - day of week

// Schedule a cron job to run every 5 seconds
cron.schedule("*/5 * * * * *", fetchData);

cron.schedule("*/10 * * * *", () => {
  console.log("Cron job is running every 10 second");
  fetchData();
});

//  wednesday at 1:30 PM
cron.schedule("30 13 * * 3", () => {});
cron.schedule("30 13 10,12,13 * *", () => {});
cron.schedule("*/15 * * * * ", () => {});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
