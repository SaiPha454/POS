const router = require('express').Router();

const { createCart, selectAllCarts, decreaseCart, deleteCart } = require('../controllers/cartController');


router.post('/', createCart)
router.get('/', selectAllCarts)
router.patch('/:id', decreaseCart)
router.delete('/:id', deleteCart)

module.exports = router;