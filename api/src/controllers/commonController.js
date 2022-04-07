
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
        result = await commonDao.getAllItems(page, limit, filter, sort);
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

/**
 * get a list of all categories
 * @param No params
 * 
 * @returns Object 
 */
const getAllCategories= async (req, res)=>{
   
    let categories = await commonDao.getAllCategories();

    return res.status(200).json(response.response(200, 'success', { total: categories.length } , categories))
}

module.exports={
    getItemById,
    getAllItems,
    getAllCategories
}