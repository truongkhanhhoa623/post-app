const Post = require("../models/post");
const { mutipleMongooseToObject} =require("../../util/mongoose")
class NewsController {


  index(req, res, next) {
    Post.find({})
      .then((posts) => {
        res.render("home", {
          posts: mutipleMongooseToObject(posts),
        });
      })
      .catch(next);
  }
}

module.exports = new NewsController();
