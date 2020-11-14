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

module.exports = articleRoute;
