const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');
const { Seller, Product } = require('../../models')

const createOne = async (name, email, password) => {

  let seller = new Seller({ name, email, password });
  const salt = await bcrypt.genSalt(10);
  seller.password = await bcrypt.hash(seller.password, salt)

  return await seller.save();
}
const findEmail = async (email) => await Seller.findOne({ email });

const selectAlls = async () => await Seller.find().select('-password');

const selectOne = async (id) => await Seller.findById(id).select('-password');


const deleteOne = async (id) => {
  const seller = await Seller.deleteOne(mongoose.Types.ObjectId(id));
  if(seller.deletedCount > 0) await Product.find({ seller: mongoose.Types.ObjectId(id) }).deleteMany();
  return seller;
}

const activateSeller = async (id) => {
  return await Seller.findByIdAndUpdate({ _id: id, status: 'banned' }, { status: 'active' }, { new: true }).select('-password')
}
const banSeller = async (id) => {
  return await Seller.findByIdAndUpdate({ _id: id, status: 'active' }, { status: 'banned' }, { new: true }).select('-password')
}
module.exports = {
  createOne, findEmail,
  selectAlls,
  selectOne,
  deleteOne, activateSeller, banSeller
}
