const { response } = require('../utils');
const ordersDao = require('../daos/orders_dao')

/**
 * Insert a new order
 * 
 * @param {string} address - user  address
 * @param {ObjectId} userId - user id 
 * 
 * @returns Object
 */
const createOrder = async (req, res) => {
  const { _id, address } = req.body
  const orders = await ordersDao.insert(_id, address)
  if (!orders) return res.status(400).send(response.errorResponse(400, 'Something wrong when creating orders...'));

  const meta = { '_id': orders._id };
  return res.status(201).send(response.response(201, 'success', meta, orders));
}

/**
 * Selecting orders
 * @param {ObjectId} id - order id 
 * 
 * @returns Object
 */
const selectOrders = async (req, res) => {

  const order = await ordersDao.findById(req.params.id);
  if (!order) return res.status(400).send(response.errorResponse(400, 'The order with the given ID not found '));
  const meta = { "total": 5 };
  return res.status(200).send(response.response(200, 'success', meta, order));

}


module.exports = {
  createOrder, selectOrders
}