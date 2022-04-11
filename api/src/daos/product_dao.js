const productImple = require('./imple/productImple')

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
const insert = async (name, price, seller, category, description)=> productImple.insert(name, price, seller, category, description);

/**
 * Delete a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteById = async (id)=> productImple.deleteById(id);

/**
 * 
 * find a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id 
 * 
 * @returns Object
 */
const findById = async (id)=> productImple.findById(id);

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
const update = async (id, name, price, seller, category, description)=> productImple.update(id, name, price, seller, category, description);

 /**
  * Get all products when no options are applied or filter, sort and paginate items with the specified options.
  * 
  * @author Sai Marn Pha
  * @param {number} page - the pagination page index
  * @param {number} limit - the number of items per page
  * @param {Object} filter - filter object to parse in mongoDB query (eg. filter[name]= 'samsaung')
  * @param {Object} sort - sort object to parse in mongoDB qeury (eg. sort[name]= -1)
  * 
  * @returns Object
  */
 const findAll = async (page, limit, filter, sort)=> productImple.findAll(page, limit, filter, sort);


module.exports={
    insert,
    deleteById,
    findById,
    update,
    findAll
}