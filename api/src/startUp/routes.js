const express = require('express');

const seller = require('../routes/seller');
const common = require('../routes/common')

module.exports = (app)=>{

    app.use(express.json())
    
    app.use('/seller', seller);
    app.use('/', common);
}