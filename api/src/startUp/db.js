const mongoose = require('mongoose');


module.exports = () => {
    const uri = process.env.mongodbUri;
    mongoose.connect(uri, { useNewUrlParser: true })
        .then(() => {
            console.log(`mongodb is connected to ${uri}`)
        }).catch(() => {
            console.log('Fail to connect MongoDB server.')
        });
}