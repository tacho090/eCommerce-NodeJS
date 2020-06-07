const express = require('express');
const home = require('../routes/home');
const products = require('../routes/products');
const users = require('../routes/users');
const auth = require('../routes/auth');
const checkout = require('../routes/checkout');

module.exports = function(app) {
    app.use(express.json());
    app.use('/', home);
    app.use('/api/products', products);
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use('/checkout', checkout);
}