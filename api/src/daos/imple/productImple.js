const mongoose = require('mongoose')

const Product = require('../../models/product')

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

const insert =async (name, price, seller, category, description='')=>{

    const item = new Product({
        name,
        price,
        seller,
        category,
        description
    });

    return await item.save();
    
}

/**
 * 
 * Delete a product item by id
 * @author Sai Marn Pha
 * 
 * @param {ObjectId} id - the item id which will be deleted
 * 
 * @returns Object
 */
const deleteById =async (id)=>{

    return await Product.deleteOne({'_id':  mongoose.Types.ObjectId(id)});
    
}

/**
 * 
 * find a product item by id
 * 
 * @author Sai Marn Pha
 * @param {ObjectId} id - the item id 
 * 
 * @returns Object
 */
const findById= async (id)=>{

    return await Product.findOne({'_id': mongoose.Types.ObjectId(id)});
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
const update = async (id, name, price, seller, category, description)=>{

    let filter = {
        '_id': mongoose.Types.ObjectId(id)
    }
    let update = {
        name,
        description,
        price,
        seller,
        category,
        description
    }

    return await Product.updateOne(filter, update);
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
 const findAll= async (page, limit= 0, filter={}, sort={})=>{
    
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
    insert,
    deleteById,
    update,
    findById,
    findAll
}