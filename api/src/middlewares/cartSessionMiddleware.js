const session = require('express-session')
const MongoDBSTORE = require('connect-mongodb-session')(session)
const CART_MODEL = require('../models/carts');

module.exports = (app)=>{

    const store = new MongoDBSTORE({
        uri: process.env.mongodbUri,
        collection: CART_MODEL
    });
    app.use(session({
        secret: process.env.CART_SESSION_SECRETE,
        store: store,
        saveUninitialized: false
    }));
}