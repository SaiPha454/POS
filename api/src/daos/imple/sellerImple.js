const mongoose = require('mongoose')

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

/**
 * 
 * Delete a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteById =async (id)=>{

    return await Product.deleteOne({'_id':  mongoose.Types.ObjectId(id)});
    
}

/**
 * 
 * find a product item by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - the item id 
 * 
 * @returns Object
 */
const findById= async (id)=>{

    return await Product.findOne({'_id': mongoose.Types.ObjectId(id)});
}

/**
 * Update a product item information by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - product item id
 * @param {string} name - new product name which will be updated
 * @param {number} price - new price of the specified item
 * @param {ObjectId} seller - seller id
 * @param {ObjectId} category - category id 
 * @param {string} description - new description of the specified item
 * 
 * @returns Object
 */
const update = async (id, name, price, seller, category, description)=>{

    let filter = {
        '_id': mongoose.Types.ObjectId(id)
    }
    let update = {
        name,
        description,
        price,
        seller,
        category,
        description
    }

    return await Product.updateOne(filter, update);
}

module.exports={
    insert,
    deleteById,
    update,
    findById
}