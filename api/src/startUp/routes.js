const express = require('express');

const seller = require('../routes/seller');
const adminSellers = require('../routes/adminSellers');
module.exports = (app) => {

    app.use(express.json())
    app.use('/seller', seller)
    app.use('/admin/sellers', adminSellers);

}