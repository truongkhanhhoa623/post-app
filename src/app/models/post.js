const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

mongoose.plugin(slug)

const Post = new Schema({
  title: { type: String, default: "none" },
  content: { type: String, default: "none" },
  image: {type: String},
  slug: { type: String, slug: "title", unique: true },
},{
    timestamps: true
});

module.exports = mongoose.model("Post", Post);
