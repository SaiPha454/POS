const { createOrder, confirmOrder, getAllOrders } = require('../controllers/orderController');
const validateBodyObjectId = require('../middlewares/validateBodyObjectId');
const validateObjectId = require('../middlewares/validateParamObjectId');
const router = require('express').Router();

//need user middleware 
router.post('/', validateBodyObjectId('user_id'), createOrder)

//admin middleware goes here
router.get('/', getAllOrders)
router.patch('/confirm/:id', validateObjectId, confirmOrder)

module.exports = router;