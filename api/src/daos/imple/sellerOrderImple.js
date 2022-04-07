const mongoose= require('mongoose');
const Order = require('../../models/orders');

/**
 * Get the orders related to the seller
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - seller id (req)
 * 
 * @returns object
 */
const findAll= async (id)=>{

    let orders = await Order.find({'items.seller_id': mongoose.Types.ObjectId(id)});
    
    return orders.map(element=>{

        element.items.map((item, index)=>{

            if(item.seller_id.toString() != id) element.items.splice(index, 1);
        })
        return element
    });
}

module.exports={
    findAll
}