const { uploadItem, index, updateItem, deleteItem } = require('../../controllers/categoryController');


const router = require('express').Router();

router.get('/', index)
router.post('/', uploadItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router;