const router = require('express').Router();

const commonController = require('../controllers/commonController');

router.get('/products/:id', commonController.getItemById)

module.exports = router;
