//Mongoose Model for the orders

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
  status: { type: String, default: 'pending', required: true, enum: ['pending', 'confirmed'] },

  items: {
    type: [{
      _id: { type: mongoose.Types.ObjectId, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      qty: { type: Number, required: true },
      seller_id: { type: mongoose.Types.ObjectId, required: true }
    }],
    required: true
  },

  user: {
    _id: { type: mongoose.Types.ObjectId, required: true },
    address: { type: String, required: true }
  }
})


const Order = mongoose.model('Order', OrderSchema);


module.exports = Order;