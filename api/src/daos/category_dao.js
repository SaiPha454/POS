const categoryImple = require('./imple/categoryImple')

/**
 * Insert a new category
 * 
 * @param {string} name - category name
 * 
 * @returns Object
 */
const insert = async (name) => categoryImple.insert(name);

/**
 * update a category
 * 
 * @param {ObjectId} id - category id
 * @param {string} name - category name
 * 
 * @returns Object
 */
const update = async (id, name) => categoryImple.update(id, name);

/**
 * get a category
 * 
 * @param {ObjectId} id - category id
 * 
 * @returns Object
 */
const findById= async (id)=> categoryImple.findById(id);

/**
 * Delete a category by id
 * 
 * @param {ObjectId} id - the category id which will be deleted
 * 
 * @returns Object
 */
const deleteById = async (id) => categoryImple.deleteById(id);

/**
 * get a list of all categories
 * @param No params
 * 
 * @returns Object 
 */
 const findAll = async ()=> categoryImple.findAll();
module.exports = {
    insert,
    update,
    deleteById,
    findAll,
    findById
}