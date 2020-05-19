const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true
    }
}));

exports.Product = Product;