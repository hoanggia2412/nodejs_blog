const Course = require('../modals/Course')

class MeController {
   
    trash(req, res,next) {
        Course.findDeleted({}).then(course => {
            res.render('me/trash',{course : course.map(c => c.toObject())})
        }).catch(next)
        
    }
    storedCourse(req, res,next) {
        Promise.all([Course.find({}),Course.countDeleted()])
        .then(([course,deletedCount])=>{
            res.render('me/stored-course.hbs',
            {
                course : course.map(c => c.toObject()),
                deletedCount
            })
        })

        // Course.find({}).then(course => {
        //     res.render('me/stored-course.hbs',{course : course.map(c => c.toObject())})
        // }).catch(next)
        
    }
}
module.exports = new MeController();
