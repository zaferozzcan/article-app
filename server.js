const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

//  server listener
app.listen(PORT, () => {
  console.log("👻Server is running on port " + PORT);
});
