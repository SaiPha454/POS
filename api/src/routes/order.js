const { createOrder, confirmOrder, getAllOrders } = require('../controllers/orderController');
const router = require('express').Router();

//need user middleware 
router.post('/', createOrder)

//admin middleware goes here
router.get('/', getAllOrders)
router.patch('/confirm/:id', confirmOrder)

module.exports = router;