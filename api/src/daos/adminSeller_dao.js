const adminSellerimple = require('./imple/adminSellerimple')

const createOne = async (name, email, password) => adminSellerimple.createOne(name, email, password);
const findEmail = async (email) => adminSellerimple.findEmail(email);

const updateOne = async (id, name, email, password) => adminSellerimple.updateOne(id, name, email, password);

const selectAlls = async () => adminSellerimple.selectAlls();
const selectOne = async (id) => adminSellerimple.selectOne(id);
const deleteOne = async (id) => adminSellerimple.deleteOne(id);

const activateSeller = async (id) => adminSellerimple.activateSeller(id);
const banSeller = async (id) => adminSellerimple.banSeller(id);

module.exports = {
  createOne, findEmail,
  selectAlls,
  selectOne, updateOne,
  deleteOne, activateSeller, banSeller
}