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

module.exports={
    getItemById
}