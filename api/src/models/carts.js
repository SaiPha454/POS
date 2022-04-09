const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    min: 0,
    required: true,
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller'
  }
});

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart;