const Course = require('../modals/Course')

class CourseController {
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
       .then(course => {
        course = course.map(course => course.toObject())
        res.render('home',{
            course
        })})
        .catch(next)
    }
}
module.exports = new CourseController();
