// Required dependencies
var mysql = require('mysql');

// Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "root",
    database: "boomingDB"
});