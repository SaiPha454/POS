const mongoose = require("mongoose")
const Product = require("../../models/product")

/**
 * Get detail of a product item by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - the item id
 * 
 * @returns Object
 */
const getItemById = async (id)=>{
    
    return await Product.findOne({'_id': mongoose.Types.ObjectId(id)});
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
const getAllItems= async (page, limit= 0, filter={}, sort={})=>{
    
    let filterObject = {} ;
    for (const key in filter) {
        if (key == 'category' || key == 'seller') {
            filterObject[key] = mongoose.Types.ObjectId(filter[key]);
        }else{
            filterObject[key] = new RegExp(filter[key] , 'gi')
        }
    }

    let skip = ( page  -1) * limit;

   let total_items = await Product.find(filterObject).count();

   let items = await Product.find(filterObject).sort(sort).skip(skip).limit(limit);

   let total_pages = page && parseInt((total_items / limit) + 0.99) || 0;

    return {

        total_items ,
        total_pages,
        items,
        skip
    }
}

module.exports={

    getItemById,
    getAllItems
}