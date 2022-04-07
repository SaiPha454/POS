const sellerOrderImple = require('./imple/sellerOrderImple');

/**
 * Get the orders related to the seller
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - seller id (req)
 * 
 * @returns object
 */
const findAll= async (id)=> sellerOrderImple.findAll(id);


module.exports={
    findAll
}