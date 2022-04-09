const mongoose = require('mongoose')
const { Order, Cart } = require('../../models')


/**
 * Insert a new cart
 * 
 * @param {ObjectId} id - user id
 * @param {string} address - user address
 * @returns Object
 */
const createOrder = async (_id, address) => {
  const cart = await Cart.find()
  const orders = new Order({
    user: {
      _id,
      address
    },
    items: cart
  });
  return await orders.save()
}
/**
 * select order by user Id
 * @returns Object
 */
const selectOrders = async (id) => await Order.find({ "user._id": id });




module.exports = {
  createOrder,
  selectOrders,
}