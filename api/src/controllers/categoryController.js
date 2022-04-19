const { response } = require('../utils');

const categoryDao = require('../daos/category_dao');


/**
 * Insert a new category
 * 
 * @param {string} name - category name
 * 
 * @returns Object
 */

const createCategory = async (req, res, next) => {

    let { name } = req.body;

    let result = await categoryDao.insert(name)

    let meta = { '_id': result._id };

    return res.status(201).send(response.response(201, 'success', meta, result));
}

/**
 * update a category
 * 
 * @param {ObjectId} id - category id
 * @param {string} name - category name
 * 
 * @returns Object
 */
const updateCategory = async (req, res, next) => {
    let { id } = req.params;
    let { name } = req.body;

    let result = await categoryDao.update(id, name)

    if(result.matchedCount == 0){
        return res.status(404).send(response.errorResponse(404, 'The category with the specified id was not found'));
    }

    result= await categoryDao.findById(id);

    let meta = { '_id': result._id };
    return res.status(200).send(response.response(200, 'Updated successfully', meta, result));
}

/**
 * Delete a category by id
 * 
 * @param {ObjectId} id - the category id which will be deleted
 * 
 * @returns Object
 */
const deleteCategory = async (req, res) => {

    let { id } = req.params;

    let result = await categoryDao.deleteById(id);

    if (result.deletedCount == 0) {

        return res.status(404).send(response.errorResponse(404, 'The category with the specified id was not found'));
    }

    let meta = { '_id': id };
    return res.status(200).send(response.response(200, 'deleted successfully', meta));
}

/**
 * get a list of all categories
 * @param No params
 * 
 * @returns Object 
 */
 const getAllCategories= async (req, res)=>{
   
    let categories = await categoryDao.findAll();

    return res.status(200).json(response.response(200, 'success', { total: categories.length } , categories))
}


module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories

}