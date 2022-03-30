const { uploadItem } = require('../controllers/sellerController');


const router = require('express').Router();

router.post('/products', uploadItem)

module.exports = router;
