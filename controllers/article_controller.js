const mongoose = require("mongoose");
const express = require("express");
const Article = require("../models/articles");
const staticData = require("../models/staticData");
const { model } = require("../models/articles");

const articleRoute = express.Router();

articleRoute.get("/", (req, res) => {
  res.render("../views/index/articles.ejs", {
    articles: staticData,
  });
});

// new article view
articleRoute.get("/new", (req, res) => {
  res.render("../views/show/new_article.ejs");
});

// new article post
articleRoute.post("/new", (req, res) => {
  Article.create(req.body, (err, data) => {
    if (!err) {
      console.log("new article added");
      res.status(200).json(data);
    } else {
      console.log("There is an error, read your error message");
      res.status(400).json({ error: err.message });
    }
  });
  req.body.author.value = "";
  req.body.title.value = "";
  req.body.content.value = "";
  res.redirect("/");
});

module.exports = articleRoute;
