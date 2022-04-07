const express = require('express');

const sellerProduct = require('../routes/seller');
const sellerOrder = require('../routes/sellerOrder');
const adminSellers = require('../routes/adminSellers');

module.exports = (app) => {

    app.use(express.json())

    app.use('/seller', [sellerProduct, sellerOrder])
    app.use('/admin/sellers', adminSellers);

}