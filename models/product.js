const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}));

exports.Product = Product;