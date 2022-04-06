const { uploadItem, deleteItem, updateItem } = require('../controllers/sellerController');


const router = require('express').Router();

router.post('/products', uploadItem)
router.delete('/products/:id', deleteItem)
router.put('/products/:id', updateItem)

module.exports = router;
