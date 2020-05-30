const Joi = require('joi');
const mongoose = require('mongoose');
const minL = 5;
const maxN = 50;
const maxE = 255;

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: minL,
        maxlength: maxN
    },
    email: { 
        type: String, 
        required: true,
        minlength: minL,
        maxlength: maxE,
        unique: true 
    },
    password: { 
        type: String, 
        required: true,
        minlength: minL,
        maxlength: 1024,
    }
}));

function validateUser(user) {
    const schema = {
        name: Joi.string().min(minL).max(maxN).required(),
        email: Joi.string().min(minL).max(maxE).required().email(),
        password: Joi.string().min(minL).max(maxE).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;