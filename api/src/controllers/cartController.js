const { response } = require('../utils');
const cartsDao = require('../daos/carts_dao')

/**
 * Insert a new carts
 * 
 * @param {string} name - carts name
 * @param {Number} price - price
 * @param {Number} qty - quantity
 * @param {ObjectId} seller_id - seller id of the product
 * 
 * @returns Object
 */
const createCart = async (req, res) => {

  const { id, name, price, qty, seller_id } = req.body;
  const item = await cartsDao.insert(id, name, price, qty, seller_id, req.session);
  
  const meta = { '_id': id };
  return res.status(201).send(response.response(201, 'success', meta, item));
}

/**
 * Selecting all carts
 * 
 * 
 * @returns Object
 */
const selectAllCarts = async (req, res) => {
  let carts = await cartsDao.selectAllCarts(req.session);
  if (!carts) carts= [];
  
  return res.status(200).send(response.response(200, 'success', {}, carts));
}

/**
 * update a cart
 * 
 * @param {string} qty - quantity of item to decrease
 * @param {ObjectId} id - cart id 
 * 
 * @returns Object
 */
const decreaseCart = async (req, res) => {
  let { id } = req.params;
  let { qty } = req.body;
  const cart = await cartsDao.update(id, qty, req.session)
  if (!cart) return res.status(400).send(response.errorResponse(400, 'fail to descrease'));

  const meta = { '_id': cart._id };
  return res.status(200).send(response.response(201, 'success', meta, cart.items));
}

/**
 * Delete a category by id
 * 
 * @param {ObjectId} id - the cart id which will be deleted
 * 
 * @returns Object
 */
const deleteCart = async (req, res) => {
  const item = await cartsDao.deleteById(req.params.id, req.session);
  if (!item) return res.status(400).send(response.errorResponse(404, 'The item with the given id not found '));

  const meta = { '_id': item._id };
  return res.status(200).send(response.response(200, 'deleted successfully', meta));

}

module.exports = {
  createCart, selectAllCarts,
  decreaseCart, deleteCart,
}