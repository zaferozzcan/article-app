// dependencies
const express = require("express");
require("dotenv").config();
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");

// import model
const Article = require("./models/articles");

// config
const PORT = process.env.PORT;
mongoURI = process.env.mongoURI;
const db = mongoose.connection;

// static data
const data = require("./models/staticData");

// database-mongoDB connection
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("👉🏼The connection with mongod is established🤟🏼🎼");
  }
);
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));

// initialize the app
const app = express();

app.set("views engine", ejs);
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    articles: data,
  });
});

// controllers
const articleController = require("./controllers/article_controller");
app.use("/article", articleController);

//  server listener
app.listen(PORT, () => {
  console.log("👻Server is running on port " + PORT);
});
