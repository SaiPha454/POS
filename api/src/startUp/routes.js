const express = require('express');

const seller = require('../routes/seller');
const adminSellers = require('../routes/adminSellers');
const categories = require('../routes/categories');

module.exports = (app) => {

    app.use(express.json())
    
    app.use('/seller', seller)
    app.use('/admin/sellers', adminSellers);
    app.use('/admin/categories', categories);

}