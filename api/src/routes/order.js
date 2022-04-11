const { createOrder } = require('../controllers/orderController');
const router = require('express').Router();

//need user middleware 
router.post('/', createOrder)



module.exports = router;