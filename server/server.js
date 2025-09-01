const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const transactions = require(path.join(__dirname, "db.json")).transactions;

app.get("/api/transactions", (req, res) => {
  setTimeout(() => {
    res.json(transactions);
  }, 2000);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Mock API server running on http://localhost:${port}`);
});
