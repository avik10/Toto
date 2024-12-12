const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true,
        minLength: 4,
        maxLength: 15
    },
    role: {
        type: String,
        require: true,
        trim: true
    },
    mobile: {
        type: String,
        require: true,
        trim: true
    },
    address: {
        type: String,
        require: true,
        trim: true
    },

}, { timestamps: true });

userSchema.index({email: 1})

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
