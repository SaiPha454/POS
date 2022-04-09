const ordersImple = require('./imple/ordersImple')


const insert = async (_id, address) => ordersImple.createOrder(_id, address);
const findById = async (id) => ordersImple.selectOrders(id);

module.exports = {
  insert,
  findById,
}