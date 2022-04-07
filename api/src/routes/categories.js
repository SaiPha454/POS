const { createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');


const router = require('express').Router();

router.post('/', createCategory)
router.patch('/:id', updateCategory)
router.delete('/:id', deleteCategory)

module.exports = router;