const Course = require('../modals/Course')

class SiteController {
    //[get] /search
    search(req, res) {
        res.render('search');
    }
    //[GET] /
    index(req, res,next) {

    //    Course.find({},(err,doc,next) =>{
    //        if(!err) res.json(doc)
    //        else
    //       next(err)
    //    })
       // res.render('home');

       Course.find({})
       .then(course => 
        res.render('home',{
            course})
       ).catch(next)
    }
}
module.exports = new SiteController();
