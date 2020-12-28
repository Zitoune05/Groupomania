// Connection database           src : https://sequelize.org/master/manual/getting-started.html

const Sequelize = require('sequelize');
require('dotenv').config();  


const sequelize = new Sequelize('groupomania_test', process.env.DB_USER,process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false
});


sequelize.authenticate()
.then(() => console.log('Connexion à la base de donnée réussi !'))
.catch((err) => console.log('Impossible de se connecter à la base de donnée !', err));


module.exports = sequelize;
