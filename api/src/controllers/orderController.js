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

  let items = req.session.items || [];
  if(items.length <= 0 ){
    return res.status(400).send(response.errorResponse(400, 'No items to be ordered'));
  }

  const { id, address } = req.body
  const orders = await ordersDao.insert(id, address, items )
  if (!orders) return res.status(400).send(response.errorResponse(400, 'Something wrong when creating orders...'));

  req.session.items = [];
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
  
  const meta = { "total": order.length };
  return res.status(200).send(response.response(200, 'success', meta, order));

}


module.exports = {
  createOrder, selectOrders
}