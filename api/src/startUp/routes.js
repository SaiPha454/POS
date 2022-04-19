
const express = require('express');
const cartSessionMiddleware = require('../middlewares/cartSessionMiddleware');

const { cartRouter, orderRouter, productRouter, categoryRouter, sellerRouter, userRouter } = require('../routes/index')

const version = 'api/v1';

module.exports = (app) => {

    app.use(express.json())
    cartSessionMiddleware(app);
    
    app.use(`/${version}/carts`, cartRouter)
    app.use(`/${version}/orders`, orderRouter)
    app.use(`/${version}/products`, productRouter)
    app.use(`/${version}/categories`, categoryRouter)
    app.use(`/${version}/sellers`, sellerRouter)
    app.use(`/${version}/users`, userRouter)
}