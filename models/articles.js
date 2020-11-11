const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: "Anonymous" },
  liked: { type: Number, default: 0 },
});
