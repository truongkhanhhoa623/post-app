const { mongooseToObject } = require("../../util/mongoose");
const Post = require("../models/post");

class PostsController {
  //[GET] /posts/:slug
  show(req, res, next) {
    Post.findOne({ slug: req.params.slug })
        .then((post) => {
            res.render("posts/show", { post: mongooseToObject(post) });
        })
        .catch(next)
  }

  //[GET]: /posts/create
  create(req, res, next) {
    res.render("posts/create");
  }

  //[POST] /posts/store
  store(req, res, next) {
    const post = new Post(req.body);
    post
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  //[GET] /post/:id/edit
  edit(req, res, next) {
    Post.findOne({ _id :req.params.id })
        .then((post)=>{
            res.render("posts/edit", {post: mongooseToObject(post)})
        })
        .catch(next)
  }

  //[PUT] /posts/:id
  update(req, res, next){
      Post.updateOne({ _id: req.params.id }, req.body)
        .then(()=> res.redirect('/me/stored/post/'))
        .catch(next)
  }

  //[DELETE] /posts/:id
  delete(req, res, next){
      Post.deleteOne({ _id: req.params.id })
        .then(()=> res.redirect('back'))
        .catch(next)
  }
}

module.exports = new PostsController();
