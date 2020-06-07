const config = require('config');
require('dotenv').config();

module.exports = function() {
    if (!config.get('jwtPrivateKey')) { 
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
        process.exit(1); 
    };
    console.log(`Application Name: ${config.get('name')}\nMail Server: ${config.get('mail.host')}`); 
}