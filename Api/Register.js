const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true, // Ensures email is unique in the database
        required: true
    },
    tel: {
        type: Number,
        required: true
    },
    note: {
        type: String
    }
});

const RegisterModel = mongoose.model('Register', registerSchema);

module.exports = RegisterModel;