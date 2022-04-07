const { response } = require('../utils');

const categoryDao = require('../daos/category_dao');


/**
 * Insert a new item
 * 
 * @param {string} name - product item name
 * 
 * @returns Object
 */

const uploadItem = async (req, res, next) => {

    let { name } = req.body;

    let result = await categoryDao.insert(name)

    let meta = { '_id': result._id };

    return res.status(201).send(response.response(201, 'success', meta, result));
}

/**
 * Get items
 * 
 * @returns Array
 */
const index = async (req, res, next) => {

    let result = await categoryDao.index()

    let meta = { 'total': result.length };

    return res.status(200).send(response.response(200, 'success', meta, result));
}
/**
 * Insert a new item
 * 
 * @param {string} name - product item name
 * 
 * @returns Object
 */

const updateItem = async (req, res, next) => {
    let { id } = req.params;
    let { name } = req.body;

    let result = await categoryDao.update(id, name)

    if (result) {
        let meta = { '_id': result._id };

        return res.status(200).send(response.response(200, 'Updated successfully', meta, result));
    } else {
        return res.status(404).send(response.errorResponse(404, 'The item with the specified id was not found'));
    }

}
/**
 * Delete a category item by id
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteItem = async (req, res) => {

    let { id } = req.params;

    let result = await categoryDao.deleteById(id);

    if (result.deletedCount == 0) {

        return res.status(404).send(response.errorResponse(404, 'The item with the specified id was not found'));
    }

    let meta = { '_id': id };
    return res.status(204).send(response.response(204, 'deleted successfully', meta));
}

module.exports = {
    uploadItem,
    index,
    updateItem,
    deleteItem

}