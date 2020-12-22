// Connection database           src : https://www.w3schools.com/nodejs/nodejs_mysql.asp

const mysql = require('mysql');
const dotenv = require('dotenv');
require('dotenv').config();                       // protéger les clés du serveur mongoDB


let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
