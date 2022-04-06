const mongoose = require('mongoose');
const { response } = require('../utils');
module.exports = function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send(response.errorResponse(404, 'Invalid Id...'));
  next();
}