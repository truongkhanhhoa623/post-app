const newsRouter = require('./news')
const postsRouter = require('./posts')
function route(app){

    app.use('/news', newsRouter)
    app.use('/posts', postsRouter)
    app.use('/',(req, res) => {
        res.render('home')
    });
}

module.exports = route