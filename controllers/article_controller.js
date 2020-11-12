const mongoose = require("mongoose");
const express = require("express");
const Article = require("../models/articles");
const staticData = require("../models/staticData");
const { model } = require("../models/articles");

const articleRoute = express.Router();

articleRoute.get("/article", (req, res) => {
  res.render("");
});

module.exports = articleRoute;
