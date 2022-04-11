const { createOne, selectAlls, selectOne, deleteOne, activateSeller, banSeller } = require('../controllers/sellerController');
const router = require('express').Router();
const validateObjectId = require('../middlewares/validateObjectId')

router.get('/:id', validateObjectId, selectOne)

//Admin middleware goes here
router.post('/', createOne)
router.get('/', selectAlls)
router.delete('/:id', validateObjectId, deleteOne)
router.patch('/activate/:id', validateObjectId, activateSeller)
router.patch('/ban/:id', validateObjectId, banSeller)

module.exports = router;