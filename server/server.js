const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

// Sample mock data
const transactions = require(path.join(__dirname, "db.json")).transactions;

// Set up API route for transactions
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

// Run server
const port = 5000;
app.listen(port, () => {
  console.log(`Mock API server running on http://localhost:${port}`);
});
