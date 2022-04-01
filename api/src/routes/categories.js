const express = require('express')
const {getCategories , createCategories , deleteCategories , updateCategories } = require('../controllers/categoryController')

const router = express.Router();

router.get('/', getCategories);

router.post('/', createCategories);

router.delete('/', deleteCategories);

router.put('/' , updateCategories);

module.exports = router;