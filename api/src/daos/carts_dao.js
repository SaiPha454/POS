const cartsImple = require('./imple/cartsImple')

/**
 * Insert a new cart
 * 
 * @param {ObjectId} id - product id
 * @param {string} name - cart name
 * @param {number} price - cart price
 * @param {number} qty - cart qty
 * @param {ObjectId} name - sellter object id 
 * @param session - express session instance
 * 
 * @returns Object
 */
const insert = async (id, name, price, qty, seller_id, session) => cartsImple.insert(id, name, price, qty, seller_id, session);

/**
 * get all items in the cart
 * 
 * @param session - express sesssion instance
 * @returns Object
 */
const selectAllCarts = async (session) => cartsImple.selectAllCarts(session);

/**
 * descrease an item qty in the cart
 * 
 * @param {ObjectId} id - product id
 * @param {number} qty - quantity to descrease
 * @param session - express session instance
 * 
 * @returns Object
 */
const update = async (cartId, qty, session) => cartsImple.update(cartId, qty, session);

/**
 * delete an item in the cart by id
 * 
 * @param id - item id to delete
 * @param session - express session instance
 * @returns Object
 */
const deleteById = async (id, session) => cartsImple.deleteById(id, session);

module.exports = {
  insert,
  selectAllCarts,
  update,
  deleteById,
}