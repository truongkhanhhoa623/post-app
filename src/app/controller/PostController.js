const Post = require("../models/post");

class PostsController {
  index(req, res, next) {
    Post.find({})
        .then((posts)=> res.json(posts))
        .catch(next)
}}

module.exports = new PostsController();
