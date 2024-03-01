const { Client } = require("pg");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 9000; // Choose any port you prefer

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin",
  port: 5432,
});

client.connect();

// Define an endpoint to fetch and send data
app.get("/customers", (req, res) => {
  console.log("Fetching customers data...");
  client.query(`SELECT * FROM customer`, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("Query executed successfully.");
    console.log("Result:", result.rows);
    res.json(result.rows); // Send the queried data as JSON response
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
