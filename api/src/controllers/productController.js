const { response } = require('../utils');

const productDao = require('../daos/product_dao');


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
    
    let result = await productDao.insert(name, price, seller, category, description)

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
    
    let result = await productDao.deleteById(id);

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

    let update = await productDao.update(id, name, price, seller, category, description);

    if(update.matchedCount == 0 ){
        return res.status(400).send(response.errorResponse(400, 'The item with the specified id was not found'))
    }

    let meta = {
        _id : id
    }
    let data= await productDao.findById(id);

    return res.status(200).json(response.response(200, 'success', meta, data));

}

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

    let item = await productDao.findById(id);
    
    if(!item){
        return res.send(response.errorResponse(400, 'The item with the specified id was not found'))
    }

    let meta= { _id: item._id }

    res.status(200).json(response.response(200, 'success', meta, item));
}

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
const getAllItems= async (req, res)=>{

    let {page, limit, filter, sort}= req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    if(page && !limit ) limit = 15 ;

    let result ;

    try {
        result = await productDao.findAll(page, limit, filter, sort);
    } catch (error) {
        return res.status(400).json(response.errorResponse(400, 'Fail to retrive items'))
    }
    
    let {total_items, total_pages, items, skip } = result;
    
    if( total_pages == 0){

        return res.status(200).json(response.response(200, 'success', {total: total_items}, items))
    }

    let meta = {
        total_items,
        total_pages,
        page,
        limit,
        filter,
        sort,
        skip
    }

    let links = {
        fist: req.originalUrl.replace('page='+page, 'page=1'),
        last: req.originalUrl.replace('page='+page, 'page='+total_pages),
        self: req.originalUrl,
        next: page >= total_pages ? '' : req.originalUrl.replace('page='+page, 'page='+ ( page + 1)),
        prev: page <= 1 ? '' : req.originalUrl.replace('page='+page, 'page='+ ( page - 1))
    }

    return res.status(200).json(response.response(200, 'success', meta, items, links))

}

module.exports={
    uploadItem,
    deleteItem,
    updateItem,
    getItemById,
    getAllItems
    
}