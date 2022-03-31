//Mongoose Model for the sellers

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = mongoose.model('products', new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String},
    seller: {type: mongoose.ObjectId, required: true},
    category: {type: mongoose.ObjectId, required: true}
}))


module.exports = Product;