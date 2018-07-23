// dependencies 
var express = requires("express");
var mongojs = requires("mongojs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// initialize express
var app = express();

// set up static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
mongoose.connect('mongodb://localhost/property');

// Check connection
var db = Mongoose.connect('mongodb://localhost/property', function(error){
    if(error) console.log(error);

    console.log("connection successful");
});

// Routes
var routes = require('./controllers/routes.js');
app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });