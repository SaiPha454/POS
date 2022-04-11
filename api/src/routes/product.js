const { uploadItem, deleteItem, updateItem, getItemById, getAllItems } = require('../controllers/productController');


const router = require('express').Router();

//Accessible to every one
router.get('/:id', getItemById);
router.get('/', getAllItems);

//seller middleware goes here
router.post('/', uploadItem)
router.delete('/:id', deleteItem)
router.put('/:id', updateItem)

module.exports = router;
