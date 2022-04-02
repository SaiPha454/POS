const express = require('express');

const seller = require('../routes/seller');
const adminSeller = require('../routes/adminSeller');
module.exports = (app) => {

    app.use(express.json())
    app.use('/seller', seller)
    app.use('/admin/seller', adminSeller);

}