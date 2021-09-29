const Post = require("../models/post");
const {mutipleMongooseToObject} =require('../../util/mongoose')

class MeController{
    //[GET] /me/stored/posts
    storedPosts(req, res, next){
        Post.find({})
            .then((posts)=>{
                res.render('me/stored-posts', { posts: mutipleMongooseToObject(posts)})
            })
            .catch(next) 
    }

}

module.exports = new MeController;