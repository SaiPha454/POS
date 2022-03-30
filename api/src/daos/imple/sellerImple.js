const Product = require('../../models/product')

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

const insert =async (name, price, seller, category, description='')=>{

    const item = new Product({
        name,
        price,
        seller,
        category,
        description
    });

    return await item.save();
    
}



module.exports={
    insert
}