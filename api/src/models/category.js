const mongoose = require('mongoose')

const Category = mongoose.model('Category', mongoose.Schema({
    name : {
        type : String,
        required : true,
        uppercase : true,
    },
}))

module.exports = Category 