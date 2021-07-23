const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')


const Course = new Schema({
    name: {type: String, default: 'hahaha', maxLength: 50},
    description: {type: String,maxLength: 600},
    image: {type:String,maxLength: 255,default: 'https://resources.stdio.vn/content/article/tong-quan-ve-ngon-ngu-lap-trinh-java/thumbnail-hd/blob-1600511467219@960x540.jpg'},
    video:{type:String,maxLength: 255},

},{
    timestamps: true
}
)
//add plugin
Course.plugin(mongooseDelete,
    {
    overrideMethods: true,
    deletedAt:  true
    })
module.exports = mongoose.model('Course',Course)