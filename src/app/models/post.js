const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, default: "none" },
  content: { type: String, default: "none" },
});

module.exports = mongoose.model("Post", Post);
