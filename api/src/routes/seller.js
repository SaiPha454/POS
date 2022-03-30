const { uploadItem, deleteItem } = require('../controllers/sellerController');


const router = require('express').Router();

router.post('/products', uploadItem)
router.delete('/products/:id', deleteItem)

module.exports = router;
