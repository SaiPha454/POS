const { response } = require('../utils');
const ordersDao = require('../daos/orders_dao')

/**
 * Selecting orders
 * @param {ObjectId} id - user id 
 * 
 * @returns Object
 */
const getUsrOrders = async (req, res) => {

  const order = await ordersDao.findById(req.params.id);
  
  const meta = { "total": order.length };
  return res.status(200).send(response.response(200, 'success', meta, order));

}


module.exports = {
  getUsrOrders
}