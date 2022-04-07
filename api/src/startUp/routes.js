const express = require('express');

const seller = require('../routes/seller');
const categories = require('../routes/admin/categories');

module.exports = (app)=>{

    app.use(express.json())
    
    app.use('/seller', seller);
    app.use('/categories', categories);

}