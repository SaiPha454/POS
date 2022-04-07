const { findAll } = require('../daos/sellerOrder_dao');
const { response } = require('../utils');

/**
 * Get the orders related to the seller
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - seller id (req)
 * 
 * @returns object
 */
const getOrders= async (req, res)=>{

    let { id }= req.params;
    
    let orders= await findAll(id);
    
    let meta = {total: orders.length}

    res.status(200).json(response.response(200,'success', meta, orders))
}

module.exports= {
    getOrders
}