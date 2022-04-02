const mongoose = require("mongoose")
const Product = require("../../models/product")

/**
 * Get detail of a product item by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - the item id
 * 
 * @returns Object
 */
const getItemById = async (id)=>{
    
    return await Product.findOne({'_id': mongoose.Types.ObjectId(id)});
}


module.exports={
    getItemById
}