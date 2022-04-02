const commonImple = require('./imple/commonImple')

/**
 * Get detail of a product item by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - the item id
 * 
 * @returns Object
 */
const getItemById = async (id) => commonImple.getItemById(id);

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
const getAllItems = async (page, limit, filter, sort)=> commonImple.getAllItems(page, limit, filter, sort);

module.exports={
    getItemById,
    getAllItems
}