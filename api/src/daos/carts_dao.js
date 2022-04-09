const cartsImple = require('./imple/cartsImple')


const insert = async (id, name, price, qty, seller_id) => cartsImple.insert(id, name, price, qty, seller_id);
const selectAllCarts = async () => cartsImple.selectAllCarts();

const update = async (cartId) => cartsImple.update(cartId);


const deleteById = async (id) => cartsImple.deleteById(id);

module.exports = {
  insert,
  selectAllCarts,
  update,
  deleteById,
}