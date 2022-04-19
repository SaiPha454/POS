const { createCategory, updateCategory, deleteCategory, getAllCategories } = require('../controllers/categoryController');
const validateObjectId = require('../middlewares/validateParamObjectId');


const router = require('express').Router();

router.get('/', getAllCategories)

//Admin middleware goes here
router.post('/', createCategory)
router.patch('/:id', validateObjectId, updateCategory)
router.delete('/:id', validateObjectId, deleteCategory)

module.exports = router;