const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course')
const meRouter = require('./me')

function route(app) {
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/course',courseRouter)
    app.use('/', siteRouter);
    
    //   app.get('/search', (req, res) => {
    //    // console.log(req.query.q);
    //     res.render('search')
    //   })

    //   app.post('/search', (req, res) => {
    //     //console.log(req.query.q);
    //     res.send(req.body)
    //   })
}
module.exports = route;
