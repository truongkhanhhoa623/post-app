const { mutipleToObject } = require("../../util/mongoose");
const Post = require("../models/post");

class PostsController {
  index(req, res, next) {
    Post.find({})
        .then((posts)=> {
            res.render('posts', {
                posts: mutipleToObject(posts),
            })
        })
        .catch(next)
}}

module.exports = new PostsController();
