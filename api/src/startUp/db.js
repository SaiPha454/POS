const mongoose = require('mongoose');


module.exports=() => {
    
    const uri = process.env.mongodbUri;
    mongoose.connect(uri)
    .then(()=>{
        console.log('mongodb is connected successfully')
    }).catch(()=>{
        console.log('Fail to connect MongoDB server.')
    });

}