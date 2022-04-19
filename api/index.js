const express = require('express');

const app = express();

require('dotenv').config();
require('./src/startUp/routes')(app);
require('./src/startUp/db')();



const port = process.env.PORT || 3000;

//start the server
const server = app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))



module.exports = server;