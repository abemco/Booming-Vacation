// dependencies 
var express = requires("express");
var mongojs = requires("mongojs");
var gmailNode = require('gmail-node');
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

var clientSecret = {
    "installed": {
        "client_id":"174029907260-nbum0hq61h9c59r5qhqtml48tr691un4.apps.googleusercontent.com",
        "project_id":"pure-quasar-211613",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"uX1XbWdT0_s0glwXVHA-KymQ",
        "redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"
         ]
    }
};

var gmailNode = require('gmail-node');
 
// Message
var testMessage = {
    to: 'boomingvr@gmail.com',
    subject: 'Test Subject',
    message: '<h1>Test Email</h1>'
};
 
// ClientSecret:
gmailNode.init(clientSecret, './token.json', initComplete);
 
function initComplete(err, dataObject) {
    if(err){
        console.log('Error ', err);
    }else {
        gmailNode.send(testMessage, function (err, data) {
            console.log(err,data);
        });}}