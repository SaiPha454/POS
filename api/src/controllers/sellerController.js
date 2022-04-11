const { response } = require('../utils');
const sellerDao = require('../daos/seller_dao')

/**
 * create a new item
 * @param {string} name - seller name
 * @param {string} email - seller email
 * @param {string} password - seller password
 * @returns Object
 */
const createOne = async (req, res) => {
  const { name, email, password } = req.body
  let seller = await sellerDao.findEmail(email);
  if (seller) return res.status(400).send(response.errorResponse(400, 'This Seller Email is  Already Registered...'));

  seller = await sellerDao.createOne(name, email, password)
  if (!seller) return res.status(400).send(response.errorResponse(400, 'Something wrong when creating seller...'));

  delete seller._doc.password;
  const meta = { '_id': seller._id };
  return res.status(201).send(response.response(201, 'success', meta, seller));
}

/**
 * Select All Sellers
 * @returns Object
 */
const selectAlls = async (req, res) => {
  
  const sellers = await sellerDao.selectAlls();
  if (!sellers) return res.status(400).send(response.errorResponse(400, 'fail to fetching Sellers'));

  const meta = { 'total': sellers.length };
  return res.status(200).send(response.response(200, 'success', meta, sellers));
}

/**
 * select only one seller with req.params.id
 * Select Only One seller not included in doc but we will need in future feature
 * sry for added already..
 * @returns Object
 */
const selectOne = async (req, res) => {
  const seller = await sellerDao.selectOne(req.params.id);
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
  const seller = await sellerDao.deleteOne(req.params.id);
  if (seller.deletedCount == 0) return res.status(400).send(response.errorResponse(404, 'The seller with the given ID not found '));
  return res.status(200).send(response.response(200, 'deleted successfully'));
}

/**
 * activate seller with object id (req.params.id )
 * @param {ObjectId} id - the seller id which will be activated
 * @returns Object
 */
const activateSeller = async (req, res) => {
  const sellerActivate = await sellerDao.activateSeller(req.params.id)
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
  const sellerBanned = await sellerDao.banSeller(req.params.id)
  if (!sellerBanned) return res.status(404).send(response.errorResponse(404, 'The seller with the given request params ID is not found '));

  const meta = { '_id': sellerBanned._id };
  return res.status(200).send(response.response(200, 'banned successfully', meta, sellerBanned));
}

module.exports = {
  createOne, selectAlls,
  selectOne,
  deleteOne, activateSeller, banSeller
}