const sellerImple = require('./imple/sellerImple')

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
const insert = async (name, price, seller, category, description)=> sellerImple.insert(name, price, seller, category, description);

/**
 * Delete a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteById = async (id)=> sellerImple.deleteById(id);

module.exports={
    insert,
    deleteById
}