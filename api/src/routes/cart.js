const router = require('express').Router();

const { createCart, selectAllCarts, decreaseCart, deleteCart } = require('../controllers/cartController');
const validateObjectId = require('../middlewares/validateParamObjectId');


router.post('/', createCart)
router.get('/', selectAllCarts)
router.patch('/:id', validateObjectId, decreaseCart)
router.delete('/:id', validateObjectId, deleteCart)

module.exports = router;