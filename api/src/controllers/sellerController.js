const { response } = require('../utils');

const sellerDao = require('../daos/seller_dao');


/**
 * Insert a new item
 * 
 * @param {string} name - product item name
 * @param {number} price - product item price
 * @param {ObjectId} seller - seller id
 * @param {ObjectId} category - category id
 * @param {string} description - description text for the item
 * 
 * @returns Object
 */

const uploadItem= async (req, res, next)=>{
    
    let  { name, price, seller, category, description} = req.body ;
    
    let result = await sellerDao.insert(name, price, seller, category, description)

    let meta = { '_id': result._id };
    
    res.status(201).send( response.response(201, 'success', meta, result) );
}



module.exports={
    uploadItem
    
}