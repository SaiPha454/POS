const mongoose = require('mongoose')

const Category = require('../../models/category')

/**
 * Insert a new category
 * 
 * @param {string} name - category name
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
 * update a category
 * 
 * @param {ObjectId} id - category id
 * @param {string} name - category name
 * 
 * @returns Object
 */

const update = async (id, name) => {
    const catId = mongoose.Types.ObjectId(id);

    return await Category.updateOne({ '_id': catId }, { name });
}

/**
 * get a category
 * 
 * @param {ObjectId} id - category id
 * 
 * @returns Object
 */
const findById= async (id)=>{

    return await Category.findOne({'_id': mongoose.Types.ObjectId(id)});
}

/**
 * Delete a category by id
 * 
 * @param {ObjectId} id - the category id which will be deleted
 * 
 * @returns Object
 */
const deleteById = async (id) => {

    return await Category.deleteOne({ '_id': mongoose.Types.ObjectId(id) });

}

/**
 * get a list of all categories
 * @param No params
 * 
 * @returns Object 
 */
 const findAll= async ()=>{

    return await Category.find();
}

module.exports = {
    insert,
    update,
    deleteById,
    findAll,
    findById
}