const { find , create , update , destroy} = require('../daos/category_dao')
const { response } = require('../utils/index')

//----------------------------------------------------------------------------------

//  @desc                   GET Categories
//  @route                  GET /categories
//  @body                   --
//  @access                 Public

module.exports.getCategories = async (req,res,next) => {
    try {
        const data = await find();
        const meta = {
            "total" : data.length,
        }
        res.status(200).json(response.response(200,'success',meta,data));
    } catch (error) {
        res.status(302).json(response.errorResponse(302, 'database error'));
    }
}


//----------------------------------------------------------------------------------

//  @desc                   Create Categories
//  @route                  POST /categories
//  @body                   name,
//  @access                 Admin

module.exports.createCategories = async (req,res,next) => {
    try {
        const { name } = req.body;
        const data = await create({name});
        const meta = {
            
        }
        res.status(201).json(response.response(201,'success',meta,data));
    } catch (error) {
        res.status(302).json(response.errorResponse(302, 'database error'));
    }
}


//----------------------------------------------------------------------------------

//  @desc                   Update Categories
//  @route                  PUT /categories
//  @body                   id , name ,
//  @access                 Admin

module.exports.updateCategories = async (req,res,next) => {
    try {
        const { id, name } = req.body;
        const data = await update({id,name});
        const meta = {
            
        }
        res.status(201).json(response.response(201,'success',meta,data));
    } catch (error) {
        res.status(302).json(response.errorResponse(302, error));
    }
}


//----------------------------------------------------------------------------------

//  @desc                   Delete Categories
//  @route                  DELETE /categories
//  @body                   id ,
//  @access                 Admin

module.exports.deleteCategories = async (req,res,next) => {
    try {
        const { id, name } = req.body;
        const data = await destroy({id});
        const meta = {
            
        }
        res.status(201).json(response.response(201,'success',meta,data));
    } catch (error) {
        res.status(302).json(response.errorResponse(302, 'database error'));
    }
}


