const { createOrder, selectOrders } = require('../controllers/ordersController');
const router = require('express').Router();


router.post('/orders', createOrder)
router.get('/:id/orders', selectOrders)


module.exports = router;