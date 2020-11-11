const express = require("express");
require("dotenv").config();
const path = require("path");
const ejs = require("ejs");

const PORT = process.env.PORT;
// initialize the app
const app = express();

app.set("views engine", ejs);
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
  console.log(path);
});

//  server listener
app.listen(PORT, () => {
  console.log("👻Server is running on port " + PORT);
});
