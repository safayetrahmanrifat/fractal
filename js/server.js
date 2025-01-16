const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable cross-origin requests

// Sample data
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", city: "New York" },
  { id: 2, name: "Bob", email: "bob@example.com", city: "London" },
  { id: 3, name: "Charlie", email: "charlie@example.com", city: "Paris" },
];

// API endpoint
app.get("/users", (req, res) => {
  res.json(users);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
