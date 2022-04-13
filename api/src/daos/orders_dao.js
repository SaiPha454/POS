const ordersImple = require('./imple/ordersImple')

/**
 * Make a new order
 * 
 * @param {ObjectId} id - user id
 * @param {string} address - user address
 * @param {Array} items - items to be ordered
 * 
 * @returns Object
 */
const insert = async (id, address, items) => ordersImple.createOrder(id, address, items);

/**
 * select order by user Id
 * @param id - user id
 * @returns Object
 */
const findById = async (id) => ordersImple.findByUserId(id);

/**
 * Get the orders related to the seller
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - seller id (req)
 * 
 * @returns object
 */
 const findBySellerId = async (id)=> ordersImple.findBySellerId(id);

module.exports = {
  insert,
  findById,
  findBySellerId
}