// importing the moongoose library
const mongoose = require('mongoose');

// Declaring the database
const DB = "dutTech_db";

// connecting the moongose library to the MongoDB

mongoose.connect("mongodb://localhost/"+DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(()=>console.log(`connected to the database ${DB}`))
    .catch((err)=>console.log(`something went wrong to ${DB} database`, err))