const { getOrders } = require('../controllers/sellerOrderController')
const router = require('express').Router();

router.get('/:id/orders', getOrders);

module.exports = router;
