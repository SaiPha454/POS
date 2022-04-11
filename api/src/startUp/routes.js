
const express = require('express');
const cartSessionMiddleware = require('../middlewares/cartSessionMiddleware');

const { cartRouter, orderRouter, productRouter, categoryRouter, sellerRouter, userRouter } = require('../routes/index')

module.exports = (app) => {

    app.use(express.json())
    cartSessionMiddleware(app);

    app.use('/carts', cartRouter)
    app.use('/orders', orderRouter)
    app.use('/products', productRouter)
    app.use('/categories', categoryRouter)
    app.use('/sellers', sellerRouter)
    app.use('/users', userRouter)
}