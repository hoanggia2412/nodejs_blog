const Course = require('../modals/Course')
var ObjectId = require('mongodb').ObjectID;

class CourseController {

    create(req,res,next){
        res.render('courses/create.hbs')
    }
    insert(req,res,next){
       const course = new Course({...req.body,image: `https://img.youtube.com/vi/${req.body.video}/default.jpg`})
        course.save()
        .then(()=> res.redirect('./'))
        .catch(next)
    }

    edit(req,res,next){
        Course.findOne({_id: new ObjectId(req.params.id)})
        .then(course => {res.render('me/edit.hbs',{
            course : course.toObject()
         })})
        .catch(next)
     }
     
     update(req,res,next){
        Course.updateOne({_id: new ObjectId(req.params.id)},req.body)
        .then(course => {res.redirect('/me/stored-course')})
        .catch(next)
     }

     delete(req,res,next){
        Course.delete({_id: new ObjectId(req.params.id)})
        .then(course => {res.redirect('/me/stored-course')})
        .catch(next)  
     }
     restore(req,res,next){
        Course.restore({_id: new ObjectId(req.params.id)})
        .then(course => {res.redirect('back')})
        .catch(next)
     }
     forceDelete(req,res,next){
      Course.deleteOne({_id: new ObjectId(req.params.id)})
      .then(course => {res.redirect('back')})
      .catch(next)
   }
    //[get] /news/:slug
    show(req, res,next) {
       //res.send(req.params.id);
        Course.findOne({_id: new ObjectId(req.params.id)})
        .then(course => {
        //  course =  course.toObject()
         //res.send(course)
         res.render('courses/show.hbs',{
             course : course.toObject()
          })})
         .catch(next)
     }
    }
module.exports = new CourseController();
