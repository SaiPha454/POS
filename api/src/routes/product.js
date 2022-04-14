const { uploadItem, deleteItem, updateItem, getItemById, getAllItems } = require('../controllers/productController');
const validateBodyObjectId = require('../middlewares/validateBodyObjectId');
const validateObjectId = require('../middlewares/validateParamObjectId');


const router = require('express').Router();

//Accessible to every one
router.get('/:id', validateObjectId, getItemById);
router.get('/', getAllItems);

//seller middleware goes here
router.post('/', validateBodyObjectId('seller'), validateBodyObjectId('category'),  uploadItem)
router.delete('/:id', validateObjectId, deleteItem)
router.put('/:id', validateObjectId, updateItem)

module.exports = router;
