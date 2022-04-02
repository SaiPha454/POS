const { createOne, selectAlls, selectOne, updateOne, deleteOne, activateSeller, banSeller } = require('../controllers/adminSellerController');
const router = require('express').Router();
const validateObjectId = require('../middlewares/validateObjectId')

router.post('/', createOne)
router.get('/', selectAlls)
router.get('/:id', validateObjectId, selectOne)
router.put('/:id', validateObjectId, updateOne)
router.delete('/:id', validateObjectId, deleteOne)
router.put('/activate/:id', validateObjectId, activateSeller)
router.put('/burn/:id', validateObjectId, banSeller)

module.exports = router;