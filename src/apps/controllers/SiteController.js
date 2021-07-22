const Course = require('../modals/Course')

class SiteController {
    //[get] /search
    search(req, res) {
        res.render('search');
    }
    //[GET] /
    index(req, res) {

       Course.find({},(err,doc) =>{
           if(!err) res.json(doc)
           else
           res.status(404).json({error: "ERROR!"})
       })
       // res.render('home');
    }
}
module.exports = new SiteController();
