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
  const { id, name, price, qty, seller_id } = req.body
  const carts = await cartsDao.insert(id, name, price, qty, seller_id)
  if (!carts) return res.status(400).send(response.errorResponse(400, 'Something wrong when creating carts...'));

  const meta = { '_id': carts._id };
  return res.status(201).send(response.response(201, 'success', meta, carts));
}

/**
 * Selecting all carts
 * 
 * 
 * @returns Object
 */
const selectAllCarts = async (req, res) => {
  const carts = await cartsDao.selectAllCarts();
  if (!carts) return res.status(400).send(response.errorResponse(400, 'fail to fetching Carts'));

  return res.status(200).send(response.response(200, 'success', null, carts));
}

/**
 * update a cart
 * 
 * @param {string} name - carts name
 * @param {ObjectId} id - cart id 
 * 
 * @returns Object
 */
const updateCart = async (req, res) => {
  let { id } = req.params;
  const cart = await cartsDao.update(id)
  if (!cart) return res.status(400).send(response.errorResponse(400, 'Something wrong when updating cart...'));

  const meta = { '_id': cart._id };
  return res.status(200).send(response.response(201, 'success', meta, cart));
}

/**
 * Delete a category by id
 * 
 * @param {ObjectId} id - the cart id which will be deleted
 * 
 * @returns Object
 */
const deleteCart = async (req, res) => {
  const cart = await cartsDao.deleteById(req.params.id);
  if (!cart) return res.status(400).send(response.errorResponse(404, 'The seller with the given ID not found '));

  const meta = { '_id': cart._id };
  return res.status(200).send(response.response(200, 'deleted successfully', meta));

}

module.exports = {
  createCart, selectAllCarts,
  updateCart, deleteCart,
}