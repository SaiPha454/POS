const mongoose = require('mongoose');
const { response } = require('../utils');
module.exports = (field)=> function (req, res, next) {
  
  if (!mongoose.Types.ObjectId.isValid(req.body[field]) )
    return res.status(404).send(response.errorResponse(404, 'Invalid Id...'));
  next();
}