//Mongoose Model for the Category

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = mongoose.model('categories', new Schema({
    name: { type: String, required: true }
}))

module.exports = Category;