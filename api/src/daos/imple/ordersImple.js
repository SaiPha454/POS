const mongoose = require('mongoose')
const { Order } = require('../../models')


/**
 * Make a new order
 * 
 * @param {ObjectId} id - user id
 * @param {string} address - user address
 * @param {Array} items - items to be ordered
 * 
 * @returns Object
 */
const createOrder = async (id, address, items) => {
  const orders = new Order({
    user: {
      _id: id,
      address
    },
    items
  });
  return await orders.save()
}
/**
 * select order by user Id
 * @returns Object
 */
const findByUserId = async (id) => await Order.find({ "user._id": mongoose.Types.ObjectId(id) });


/**
 * Get the orders related to the seller
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - seller id (req)
 * 
 * @returns object
 */
 const findBySellerId= async (id)=>{

  let orders = await Order.find({'items.seller_id': mongoose.Types.ObjectId(id)});
  
  return orders.map(element=>{

      element.items.map((item, index)=>{

          if(item.seller_id.toString() != id) element.items.splice(index, 1);
      })
      return element
  });
}

module.exports = {
  createOrder,
  findByUserId,
  findBySellerId
}