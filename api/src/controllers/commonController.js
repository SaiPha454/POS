
const commonDao = require('../daos/common_dao');
const { response } = require('../utils');


//............................................... Product Endpoints.......................................
/**
 * Get detail of a product item by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - the item id
 * 
 * @returns Object
 */
const getItemById = async (req, res)=>{

    let {id} = req.params;

    let item = await commonDao.getItemById(id);
    
    if(!item){
        return res.send(response.errorResponse(400, 'The item with the specified id was not found'))
    }

    let meta= { _id: item._id }

    res.status(200).json(response.response(200, 'success', meta, item));
}


module.exports={
    getItemById
}