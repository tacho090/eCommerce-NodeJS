const winston = require('winston');
const mongoose = require('mongoose');
// const config = require('config');
const logger = require('./logging');

module.exports = function () {
    // const db = 'mongodb://localhost/playground';
    const db = 'mongodb://localhost/products';
    const connectionConfirm = `Connected to ${db}`;
    // const db = config.get('db');
    mongoose.connect(process.env.MONGODB_URI || db,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            logger['connectionLog'].info(connectionConfirm);
            console.log(connectionConfirm);
        })
        .catch(err => console.log('Could not connect to MongoDB:', err));
}