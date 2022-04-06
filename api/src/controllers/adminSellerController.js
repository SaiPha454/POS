const { response } = require('../utils');
const adminSellerDao = require('../daos/adminSeller_dao')

/**
 * create a new item
 * @param {string} name - seller name
 * @param {string} email - seller email
 * @param {string} password - seller password
 * @returns Object
 */
const createOne = async (req, res) => {
  const { name, email, password } = req.body
  let seller = await adminSellerDao.findEmail(email);
  if (seller) return res.status(400).send('This Seller Email is  Already Registered...');

  seller = await adminSellerDao.createOne(name, email, password)
  if (!seller) return res.status(400).send(response.errorResponse(400, 'Something wrong when creating seller...'));

  const meta = { '_id': seller._id };
  return res.status(201).send(response.response(201, 'success', meta, seller));
}

/**
 * Select All Sellers
 * @returns Object
 */
const selectAlls = async (req, res) => {
  const TOTAL_NUMBER = 10;
  const meta = { 'total': TOTAL_NUMBER };

  const sellers = await adminSellerDao.selectAlls();
  if (!sellers) return res.status(400).send(response.errorResponse(400, 'fail to fetching Sellers'));

  return res.status(200).send(response.response(200, 'success', meta, sellers));
}

/**
 * select only one seller with req.params.id
 * Select Only One seller not included in doc but we will need in future feature
 * sry for added already..
 * @returns Object
 */
const selectOne = async (req, res) => {
  const seller = await adminSellerDao.selectOne(req.params.id);
  if (!seller) return res.status(404).send(response.errorResponse(404, 'The seller with the given ID not found '));
  const meta = { '_id': seller._id };
  return res.status(200).send(response.response(200, 'success', meta, seller));
}

/**
 * Delete a seller  by id
 * @param {ObjectId} id - the seller id which will be deleted
 * @returns Object
 */
const deleteOne = async (req, res) => {
  const seller = await adminSellerDao.deleteOne(req.params.id);
  if (!seller) return res.status(400).send(response.errorResponse(404, 'The seller with the given ID not found '));
  return res.status(200).send(response.response(200, 'deleted successfully', seller));
}

/**
 * activate seller with object id (req.params.id )
 * @param {ObjectId} id - the seller id which will be activated
 * @returns Object
 */
const activateSeller = async (req, res) => {
  const sellerActivate = await adminSellerDao.activateSeller(req.params.id)
  if (!sellerActivate) return res.status(400).send(response.errorResponse(404, 'The seller with the given request params ID is not found '));
  const meta = { '_id': sellerActivate._id };
  return res.status(200).send(response.response(200, 'activated successfully', meta, sellerActivate));
}


/**
 * bann seller with object id (req.params.id )
 * @param {ObjectId} id - the seller id which will be banned
 * @returns Object
 */
const banSeller = async (req, res) => {
  const sellerBanned = await adminSellerDao.banSeller(req.params.id)
  if (!sellerBanned) return res.status(404).send(response.errorResponse(404, 'The seller with the given request params ID is not found '));

  const meta = { '_id': sellerBanned._id };
  return res.status(200).send(response.response(200, 'banned successfully', meta, sellerBanned));
}

module.exports = {
  createOne, selectAlls,
  selectOne,
  deleteOne, activateSeller, banSeller
}