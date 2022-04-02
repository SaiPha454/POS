const router = require('express').Router();

const commonController = require('../controllers/commonController');

router.get('/products/:id', commonController.getItemById)
router.get('/products', commonController.getAllItems);

module.exports = router;
