const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const adminSchema = new Schema({
    username:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    }
})

const User = new mongoose.model('User', adminSchema);

module.exports = User;