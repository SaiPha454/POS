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

/**
 * Confirm the order status
 * 
 * @param {ObjectId} id - order id
 * @returns Object
 */
const confirmOrder= async (id)=>{
  let status = 'confirmed';
  return await Order.findOneAndUpdate({'_id': mongoose.Types.ObjectId(id)}, {'status': status})
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
const findAll= async (page, limit= 0, filter= {})=>{
  
    let filterObject = {} ;
    for (const key in filter) {
        if (key == 'status') filterObject[key] = filter[key];
    }

    let skip = ( page  -1) * limit;
    let total_orders = await Order.find(filterObject).count();
    let orders = await Order.find(filterObject).skip(skip).limit(limit);
    let total_pages = page && parseInt((total_orders / limit) + 0.99) || 0;
    return {
        total_orders ,
        total_pages,
        orders,
        skip
    }
}

module.exports = {
  createOrder,
  findByUserId,
  findBySellerId,
  confirmOrder,
  findAll
}