const { response } = require('../utils');

const sellerDao = require('../daos/seller_dao');


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

const uploadItem= async (req, res, next)=>{
    
    let  { name, price, seller, category, description} = req.body ;
    
    let result = await sellerDao.insert(name, price, seller, category, description)

    let meta = { '_id': result._id };
    
    res.status(201).send( response.response(201, 'success', meta, result) );
}

/**
 * Delete a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteItem= async (req, res)=>{

    let { id } = req.params;
    
    let result = await sellerDao.deleteById(id);

    if(result.deletedCount == 0){

        return res.status(400).send(response.errorResponse(400,'The item with the specified id was not found'));
    }

    let meta = {'_id': id};
    return res.status(200).send(response.response(200, 'success', meta ));
}


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
const updateItem= async (req, res)=>{

    let { id } = req.params;
    let  { name, price, seller, category, description } = req.body;

    let update = await sellerDao.update(id, name, price, seller, category, description);

    if(update.matchedCount == 0 ){
        return res.status(400).send(response.errorResponse(400, 'The item with the specified id was not found'))
    }

    let meta = {
        _id : id
    }
    let data= await sellerDao.findById(id);

    return res.status(200).json(response.response(200, 'success', meta, data));

}


module.exports={
    uploadItem,
    deleteItem,
    updateItem
    
}