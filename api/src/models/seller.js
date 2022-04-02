const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    // trim: true,
    // unique: true,
    validate: {
      validator: email => Seller.doesntExist({ email }),
      message: ({ value }) => `Email ${value} has already been taken`
    }
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 1024
  },
  banned: {
    type: Boolean,
    default: false
  }
});
sellerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

sellerSchema.statics.doesntExist = async function (options) {
  return await this.where(options).countDocuments() === 0
}

sellerSchema.methods.matchesPassword = function (password) {
  return bcrypt.compare(password, this.password)
}

const Seller = mongoose.model('Seller', sellerSchema)



module.exports = Seller;