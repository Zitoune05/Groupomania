const express = require('express');               // Express facilite la création de l'API
const bodyParser= require('body-parser');         // Pour extraire les informations des requêtes et les rendre utilisables
const rateLimit = require('express-rate-limit');  // Pour limiter les attaques brute 
const helmet = require ('helmet');                // Pour sécuriser les données headers
const xss = require('xss-clean')                  // Pour empêcher les utilisateurs d'insérer des scripts ou du HTML sur les entrées
const path = require('path');                     // Pour gérer nos images

const userRoutes = require('./routes/user');      // Récupération des routes
const publicationRoutes = require('./routes/publication');

require('dotenv').config();                       // protéger les clés du serveur mongoDB

const app = express();

const limiteur = rateLimit({
    windowMs: 15 * 60 * 1000,                       // 15 minutes
    max: 100,                                       // limite chaque IP à 3 requêtes par fenêtre
    message: "Vous avez été bloqué parceque vous vous êtes trompé 3 fois. Réessayer dans 15 minutes !"
});
  
app.use(limiteur);

app.use(xss());

app.use((req, res, next) => {                   // Donne l'accès du backend au frontend                                
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(helmet());
app.use('/image', express.static(path.join(__dirname,'images')));
app.use(bodyParser.json());                     //Transforme le corp de la requête en object Javascript utilisable 

app.use('/api/auth' ,userRoutes);
app.use('/api/publication', publicationRoutes);

module.exports = app;