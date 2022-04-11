const { getUsrOrders } = require('../controllers/userController');
const router = require('express').Router();


router.get('/:id/orders', getUsrOrders)


module.exports = router;