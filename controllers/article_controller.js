const mongoose = require("mongoose");
const express = require("express");
const Article = require("../models/articles");
const staticData = require("../models/staticData");
const { model } = require("../models/articles");

const articleRoute = express.Router();

articleRoute.get("/", (req, res) => {
  Article.find({}, (err, data) => {
    if (!err) {
      res.render("../views/index/articles.ejs", {
        articles: data,
      });
    } else {
      res.status(400).json({ error: err.message });
    }
  });
});

// get individual article
articleRoute.get("/:id", (req, res) => {
  Article.findById(req.params.id, (err, data) => {
    if (!err) {
      res.render("../views/show/show_article.ejs", {
        article: data,
      });
    } else {
      res.status(400).json({ error: err.message });
    }
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

articleRoute.get("/edit/:id", (req, res) => {
  Article.findById(req.params.id, (err, data) => {
    res.render("../views/show/edit_article.ejs", {
      article: data,
    });
  });
});

//edit article
articleRoute.put("/edit/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.send(200).json(data);
      console.log("aericle is updated");
    } else {
      res.status(400).json({ error: err.message });
      console.log("update err");
    }
  });
});

module.exports = articleRoute;
