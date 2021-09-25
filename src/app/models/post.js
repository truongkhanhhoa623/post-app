const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, default: "none" },
  content: { type: String, default: "none" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Post", Post);
