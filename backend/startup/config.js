const config = require('config');

module.exports = function() {
    if (!config.get('jwtPrivateKey')) { 
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
        process.exit(1); 
    };
    console.log(`Application Name: ${config.get('name')}\nMail Server: ${config.get('mail.host')}\nSecret Key: ${config.get('stripe_sek_key')}`)
    // console.info('jwtPrivateKey pending')
}