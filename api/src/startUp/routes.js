
const express = require('express');
const cartSessionMiddleware = require('../middlewares/cartSessionMiddleware');

const { seller, carts, orders, adminSellers, categories, common } = require('../routes')

module.exports = (app) => {

    app.use(express.json())

    
    
    app.use('/seller', seller)
    app.use('/admin/sellers', adminSellers);
    app.use('/admin/categories', categories);
    app.use('/', common);

    cartSessionMiddleware(app);
    app.use('/user/carts', carts);
    app.use('/user', orders);
}