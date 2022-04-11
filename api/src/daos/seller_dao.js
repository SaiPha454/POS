const sellerImple = require('./imple/sellerImple')

const createOne = async (name, email, password) => sellerImple.createOne(name, email, password);
const findEmail = async (email) => sellerImple.findEmail(email);


const selectAlls = async () => sellerImple.selectAlls();
const selectOne = async (id) => sellerImple.selectOne(id);
const deleteOne = async (id) => sellerImple.deleteOne(id);

const activateSeller = async (id) => sellerImple.activateSeller(id);
const banSeller = async (id) => sellerImple.banSeller(id);

module.exports = {
  createOne, findEmail,
  selectAlls,
  selectOne,
  deleteOne, activateSeller, banSeller
}