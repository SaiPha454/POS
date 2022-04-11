const { createCategory, updateCategory, deleteCategory, getAllCategories } = require('../controllers/categoryController');


const router = require('express').Router();

router.get('/', getAllCategories)

//Admin middleware goes here
router.post('/', createCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

module.exports = router;