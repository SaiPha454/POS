/**
 * get all items in the cart
 * 
 * @param session - express sesssion instance
 * @returns Object
 */
const selectAllCarts = async (session) => session.items;

/**
 * delete an item in the cart by id
 * 
 * @param id - item id to delete
 * @param session - express session instance
 * @returns Object
 */
const deleteById = async (id, session) => {

  let items = session.items || [];
  let exists = items.find(({_id}) => _id === id );

  if(!exists) return false;

  items.forEach((item, index) => {
    if(item._id ==  id){
      items.splice(index,1)
      return 
    }
  });
  return exists;
}

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

const insert = async (id, name, price, qty, seller_id, session) => {

  if(!session.items) session.items = [];
  
  let items = session.items;
  let exists = items.find(({_id}) => _id === id );
  let item = {_id: id, name, price, qty, seller_id }
  
  if(!exists){
    items.push(item);
    return item;
  }
  exists.qty += qty;
  return exists;
}
/**
 * descrease an item qty in the cart
 * 
 * @param {ObjectId} id - product id
 * @param {number} qty - quantity to descrease
 * @param session - express session instance
 * 
 * @returns Object
 */

const update = async (id, qty, session) => {
  let items = session.items || [];

  let exists = items.find(({_id}, index) => _id === id );
  if(!exists) return false;

  if(exists.qty < qty) return false;
  exists.qty -= qty;

  if(exists.qty == 0){
    items.forEach((item, index) => {
      if(item._id ==  id){
        items.splice(index, 1);
        return;
      }
    });
  }
  
  return session;
}



module.exports = {
  insert,
  selectAllCarts,
  update,
  deleteById
}