const { response } = require('../utils');
const adminSellerDao = require('../daos/adminSeller_dao')

const createOne = async (req, res) => {
  const { name, email, password } = req.body
  let seller = await adminSellerDao.findEmail(email);
  if (seller) return res.status(400).send('This Seller Email is  Already Registered...');

  seller = await adminSellerDao.createOne(name, email, password)
  if (!seller) return res.status(400).send('Something wrong when creating seller...')

  return res.status(201).send(response.response(201, 'success', { '_id': seller._id }, seller));
}
const selectAlls = async (req, res) => {
  const sellers = await adminSellerDao.selectAlls();
  if (!sellers) return res.status(400).send('fail to fetching Sellers')
  res.send(sellers);
}
const selectOne = async (req, res) => {
  const seller = await adminSellerDao.selectOne(req.params.id);
  if (!seller) return res.status(404).send(response.errorResponse(404, 'The seller with the given ID not found '));
  res.send(seller)
}
const updateOne = async (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body
  const seller = await adminSellerDao.updateOne(id, name, email, password)
  if (!seller) return res.status(404).send(response.errorResponse(404, 'The seller with the given request params ID is not found '));
  res.send(seller);
}
const deleteOne = async (req, res) => {
  const seller = await adminSellerDao.deleteOne(req.params.id);
  if (!seller) return res.status(404).send(response.errorResponse(404, 'The seller with the given ID not found '));
  res.send(seller)
}
const activateSeller = async (req, res) => {
  const sellerActivate = await adminSellerDao.activateSeller(req.params.id)
  if (!sellerActivate) return res.status(404).send(response.errorResponse(404, 'The seller with the given request params ID is not found '));
  res.send(sellerActivate);
}
const banSeller = async (req, res) => {
  const sellerBanned = await adminSellerDao.banSeller(req.params.id)
  if (!sellerBanned) return res.status(404).send(response.errorResponse(404, 'The seller with the given request params ID is not found '));
  res.send(sellerBanned);
}

module.exports = {
  createOne, selectAlls,
  selectOne, updateOne,
  deleteOne, activateSeller, banSeller
}