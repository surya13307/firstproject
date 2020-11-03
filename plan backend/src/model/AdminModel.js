const mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: {
        type: String, required: true
    },
    password:String,
    confirmPassword:String,
    gender:String,
    country:String,   
});
var adminModel=mongoose.model('admindatas',adminSchema);
module.exports={adminModel};