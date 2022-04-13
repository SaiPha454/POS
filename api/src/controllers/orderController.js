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
 * Confirm the order status
 * 
 * @param {ObjectId} id - order id
 * @returns Object
 */
const confirmOrder= async (req, res)=>{
  let {id} = req.params;
  let confirm = await ordersDao.confirmOrder(id);
  if(!confirm) return res.status(400).json(response.errorResponse(400, 'The order with the specified id was not found'));

  return res.status(200).json(response.response(200, 'success', {_id: confirm._id}, confirm))
}

/**
 * Get all orders
 * 
 * @param {number} page - page index 
 * @param {number} limit - number of orders per page
 * @param {Object} filter - filter object eg. filter[status]= pending
 * 
 * @returns Object
 */
const getAllOrders= async (req, res)=>{

    let {page, limit, filter}= req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    if(page && !limit ) limit = 15 ;

    let result ;
    try {
        result = await ordersDao.findAll(page, limit, filter);
    } catch (error) {
        return res.status(400).json(response.errorResponse(400, 'Fail to retrive orders'))
    }
  
    let {total_orders, total_pages, orders, skip } = result;
    if( total_pages == 0) return res.status(200).json(response.response(200, 'success', {total: total_orders}, orders))
    let meta = {
        total_orders,
        total_pages,
        page,
        limit,
        filter,
        skip
    }

    let links = {
        fist: req.originalUrl.replace('page='+page, 'page=1'),
        last: req.originalUrl.replace('page='+page, 'page='+total_pages),
        self: req.originalUrl,
        next: page >= total_pages ? '' : req.originalUrl.replace('page='+page, 'page='+ ( page + 1)),
        prev: page <= 1 ? '' : req.originalUrl.replace('page='+page, 'page='+ ( page - 1))
    }
    return res.status(200).json(response.response(200, 'success', meta, orders, links))
}

module.exports = {
  createOrder,
  confirmOrder,
  getAllOrders
}