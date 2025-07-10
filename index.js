const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to SmartFormify backend!");
});

app.listen(PORT, () => {
  console.log("SmartFormify server running on http://localhost:" + PORT);
});

