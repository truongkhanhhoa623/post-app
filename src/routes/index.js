const newsRouter = require('./news')
const postsRouter = require('./posts')
function route(app){
    app.use('/news', newsRouter)
    app.use('/posts', postsRouter)
}

module.exports = route