const { createCart, selectAllCarts, updateCart, deleteCart } = require('../controllers/cartsController');
const router = require('express').Router();


router.post('/', createCart)
router.get('/', selectAllCarts)
router.patch('/:id', updateCart)
router.delete('/:id', deleteCart)

module.exports = router;