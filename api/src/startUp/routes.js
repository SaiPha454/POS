const express = require('express');

const seller = require('../routes/seller');

module.exports = (app)=>{

    app.use(express.json())
    
    app.use('/seller', seller);

}