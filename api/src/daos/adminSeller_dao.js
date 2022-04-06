const adminSellerimple = require('./imple/adminSellerimple')

const createOne = async (name, email, password) => adminSellerimple.createOne(name, email, password);
const findEmail = async (email) => adminSellerimple.findEmail(email);


const selectAlls = async () => adminSellerimple.selectAlls();
const selectOne = async (id) => adminSellerimple.selectOne(id);
const deleteOne = async (id) => adminSellerimple.deleteOne(id);

const activateSeller = async (id) => adminSellerimple.activateSeller(id);
const banSeller = async (id) => adminSellerimple.banSeller(id);

module.exports = {
  createOne, findEmail,
  selectAlls,
  selectOne,
  deleteOne, activateSeller, banSeller
}