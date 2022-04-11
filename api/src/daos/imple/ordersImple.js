const mongoose = require('mongoose')
const { Order } = require('../../models')


/**
 * Make a new order
 * 
 * @param {ObjectId} id - user id
 * @param {string} address - user address
 * @param {Array} items - items to be ordered
 * 
 * @returns Object
 */
const createOrder = async (id, address, items) => {
  const orders = new Order({
    user: {
      _id: id,
      address
    },
    items
  });
  return await orders.save()
}
/**
 * select order by user Id
 * @returns Object
 */
const selectOrders = async (id) => await Order.find({ "user._id": mongoose.Types.ObjectId(id) });




module.exports = {
  createOrder,
  selectOrders,
}