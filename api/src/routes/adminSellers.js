const { createOne, selectAlls, selectOne, deleteOne, activateSeller, banSeller } = require('../controllers/adminSellerController');
const router = require('express').Router();
const validateObjectId = require('../middlewares/validateObjectId')

router.post('/', createOne)
router.get('/', selectAlls)
router.get('/:id', validateObjectId, selectOne)
router.delete('/:id', validateObjectId, deleteOne)
router.patch('/activate/:id', validateObjectId, activateSeller)
router.patch('/ban/:id', validateObjectId, banSeller)

module.exports = router;