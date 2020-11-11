const express = require("express");
require("dotenv").config();
const path = require("path");
const ejs = require("ejs");

const data = require("./models/staticData");

const PORT = process.env.PORT;
// initialize the app
const app = express();

app.set("views engine", ejs);
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Article-Title1",
    author: "Zafer Ozcan",
  });
});

//  server listener
app.listen(PORT, () => {
  console.log("👻Server is running on port " + PORT);
});
