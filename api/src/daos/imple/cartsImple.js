const mongoose = require('mongoose')
const { Cart } = require('../../models')

/**
 * select all carts
 * @returns Object
 */
const selectAllCarts = async () => await Cart.find({});

/**
 * delete cart by id
 * @returns Object
 */
const deleteById = async (id) => await Cart.findByIdAndRemove(id)

/**
 * Insert a new cart
 * 
 * @param {ObjectId} id - product id
 * @param {string} name - cart name
 * @param {number} price - cart price
 * @param {number} qty - cart qty
 * @param {ObjectId} name - sellter object id 
 * @returns Object
 */

const insert = async (id, name, price, qty, seller_id) => {
  const carts = new Cart({ id, name, price, qty, seller_id });
  return await carts.save();
}
/**
 * Insert a new cart
 * 
 * @param {ObjectId} id - product id
 * @returns Object
 */

const update = async (_id) => {
  return await Cart.findByIdAndUpdate({ _id }, { $inc: { qty: -1 } }, { new: true });
}



module.exports = {
  insert,
  selectAllCarts,
  update,
  deleteById
}