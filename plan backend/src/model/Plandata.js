const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var NewPlanSchema = new Schema({
    name : String,
    organisation : String,
    address : String,
    description : String,
    price : Number,
    starRating :Number,
    imageUrl : String
});




var PlanData = mongoose.model('product', NewPlanSchema);                        //UserData is the model and NewBookData is the schema

module.exports = PlanData;