const mongoose = require('mongoose')

const Category = require('../../models/category')

/**
 * Insert a new item
 * 
 * @param {string} name - category item name
 * 
 * @returns Object
 */

const insert = async (name) => {

    const item = new Category({
        name
    });

    return await item.save();

}

/**
 * Get items
 * 
 * @returns Array
 */

const index = async () => {

    return await Category.find();

}

/**
 * Update item
 * 
 * @param {string} id - category item id
 * @param {string} name - category item name
 * 
 * @returns Object
 */

const update = async (id, name) => {
    const catId = mongoose.Types.ObjectId(id);

    const result = await Category.updateOne({ '_id': catId }, { name })

    if(result.matchedCount) {
        return await Category.findOne({'_id': catId});
    } else {
        return result;
    }

}
/**
 * 
 * Delete a category item by id
 *  
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteById = async (id) => {

    return await Category.deleteOne({ '_id': mongoose.Types.ObjectId(id) });

}

module.exports = {
    insert,
    index,
    update,
    deleteById
}