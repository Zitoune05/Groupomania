// Connection database          
const mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'nathan',
});


connection.query(
  if (err) throw err;

  console.log("Connecté à la base de données MySQL!");
});

module.exports = connection;