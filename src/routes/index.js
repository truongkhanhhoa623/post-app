const HomeController = require('../app/controller/HomeController');
const newsRouter = require('./news')
const postsRouter = require('./posts')
const meRouter = require('./me')

function route(app){

    app.use('/news', newsRouter)
    app.use('/posts', postsRouter)
    app.use('/me', meRouter)
    app.use('/', HomeController.index);
}

module.exports = route