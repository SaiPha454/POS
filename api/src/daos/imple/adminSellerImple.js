const bcrypt = require('bcrypt')
const { Seller, Product } = require('../../models')

const createOne = async (name, email, password) => {

  let seller = new Seller({ name, email, password });
  const salt = await bcrypt.genSalt(10);
  seller.password = await bcrypt.hash(seller.password, salt)

  return await seller.save();
}
const findEmail = async (email) => await Seller.findOne({ email });;

const selectAlls = async () => await Seller.find();

const selectOne = async (id) => await Seller.findById(id);

const updateOne = async (id, name, email, password) => {
  return await Seller.findByIdAndUpdate(id, { name, email, password }, { new: true })
}

const deleteOne = async (id) => {
  const seller = await Seller.findByIdAndRemove(id);
  return await Product.find({ seller: seller.id }).deleteMany()
}


const activateSeller = async (id) => {
  return await Seller.findByIdAndUpdate({ _id: id, banned: true }, { banned: false }, { new: true })
}
const banSeller = async (id) => {
  return await Seller.findByIdAndUpdate({ _id: id, banned: false }, { banned: true }, { new: true })
}
module.exports = {
  createOne, findEmail,
  selectAlls,
  selectOne, updateOne,
  deleteOne, activateSeller, banSeller
}
