// Import express with the keyword express
const express = require('express');

// importing cors
const cors = require('cors')
// Grab the return from express into the variable app
const app = express();

require('./server/config/mongoose.config')
// Set the port on which server will listen
const PORT = 8000; 

// Middleware that runs the routes
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const reqObj = require('./server/routes/person.routes')
reqObj(app);

// Start the server ----- This part should always be at the bottom
app.listen(PORT,()=>{
    console.log(`Server up at port ${PORT}`)
})










