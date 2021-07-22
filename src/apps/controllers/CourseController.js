const Course = require('../modals/Course')
var ObjectId = require('mongodb').ObjectID;

class CourseController {
    //[get] /news/:slug
    show(req, res,next) {
       //res.send(req.params.id);
        Course.findOne({'_id': new ObjectId(req.params.id)})
        .then(course => {
         course =  course.toObject()
         res.send(course)
        //  res.render('home',{
        //      course
          })
         .catch(next)
     }
    }
module.exports = new CourseController();
