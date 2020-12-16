function dbConnect () {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'jetaime',
      database : 'groupomania'
    });
    connection.connect();

    return connection
}




 





// Connection database           src : https://www.w3schools.com/nodejs/nodejs_mysql.asp

const mysql = require('mysql');
const dotenv = require("dotenv");
require('dotenv').config();                       // protéger les clés du serveur mongoDB


let connection = mysql.createConnection({
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "groupomania"
});
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // Intérroger la DB
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
});

