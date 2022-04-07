const categoryImple = require('./imple/categoryImple')

/**
 * Insert a new item
 * 
 * @param {string} name - category item name
 * 
 * @returns Object
 */
const insert = async (name) => categoryImple.insert(name);

/**
 * Get items
 * 
 * @returns Array
 */
const index = async () => categoryImple.index();

/**
 * Update item
 * 
 * @param {string} _id - category item _id
 * @param {string} name - category item name
 * 
 * @returns Object
 */
const update = async (id, name) => categoryImple.update(id, name);

/**
 * Delete a category item by id
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteById = async (id) => categoryImple.deleteById(id);

module.exports = {
    insert,
    index,
    update,
    deleteById
}