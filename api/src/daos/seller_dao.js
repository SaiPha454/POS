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

/**
 * 
 * find a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id 
 * 
 * @returns Object
 */
const findById = async (id)=> sellerImple.findById(id);

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
const update = async (id, name, price, seller, category, description)=> sellerImple.update(id, name, price, seller, category, description);

module.exports={
    insert,
    deleteById,
    findById,
    update
}