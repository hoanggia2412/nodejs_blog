const mongoose = require('mongoose');


async function connect(){
try {
    await mongoose.connect('mongodb://localhost:27017/project',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('conenct successfull')
} catch (error) {
    console.log('conenct faild')
}

}
module.exports = {connect}