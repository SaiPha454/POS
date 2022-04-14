const { getUsrOrders } = require('../controllers/userController');
const validateParamObjectId = require('../middlewares/validateParamObjectId');
const router = require('express').Router();


router.get('/:id/orders', validateParamObjectId, getUsrOrders)


module.exports = router;