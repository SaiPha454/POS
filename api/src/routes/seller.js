const router = require('express').Router();
const { createOne, selectAlls, selectOne, deleteOne, activateSeller, banSeller, getOrders } = require('../controllers/sellerController');
const validateObjectId = require('../middlewares/validateObjectId')

router.get('/:id', validateObjectId, selectOne)

//seller middleware for seller order endpoint goes here
router.get('/:id/orders', getOrders)

//Admin middleware goes here
router.post('/', createOne)
router.get('/', selectAlls)
router.delete('/:id', validateObjectId, deleteOne)
router.patch('/activate/:id', validateObjectId, activateSeller)
router.patch('/ban/:id', validateObjectId, banSeller)

module.exports = router;