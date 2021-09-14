// import the moongose library
const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    title: {type:String},
    price: {type:Number},
    description: {type:String}
},{timestamps:true});

const Person = mongoose.model("Person", personSchema)

module.exports = Person;