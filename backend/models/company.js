const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyname: {type: String, unique: true, required: true},
    companyemail: {type: String, unique: true, required: true},
    companyspecialisation: {type: String, default: ''},
    companypassword: {type: String, required: true},
    isCompany: {type: Boolean, default: true},
}, {timestamps: true});

module.exports = mongoose.model('company', companySchema, 'company');
