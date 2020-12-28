const bcrypt = require('bcrypt');                           // Package pour crypter le mot de passe
const jwt = require('jsonwebtoken');                        //Package pour créer des jetons uniques
require('dotenv').config();  

const emailValidator = require('email-validator');          //plugin de validation d'email
const passWordValidator = require('password-validator');    //plugin de validation de mot de passe

const models = require('../models');

let schemaPassWord = new passWordValidator();   // variable de validation de mot de passe
schemaPassWord 
.is().min(6)                                    //longeur minimale 8
// .has().uppercase()                              //Doit avoir des lettres majuscules
// .has().lowercase()                              //Doit avoir des lettres minuscules
// .has().digits(1)                                //Doit avoir au moins 1 chiffre
.has().not().spaces()                           //Les espaces sont interdits
.is().not().oneOf(['Passw0rd', 'Password123'])  //Liste noire de ces valeurs 


// Fonction d'inscription
exports.signup = (req, res, next) => {    
    const User = models.User;
    if (!emailValidator.validate(req.body.email) || !schemaPassWord.validate(req.body.password)) {              //Si l'email ou le mot de passe est invalide alors           
        res.status(400).json({ message : ' Votre email ou mot de passe est invalide. Veuillez réessayer !'});   // Affiche un status et message d'erreur
    } 
    else {

    // hash password
    bcrypt.hash(req.body.password, 10)           
        .then( hash => {                        // On récupère le hash de mot de passe
            const newUser = new User({             // Création du nouvelle utilisateur  
            username: req.body.username,
            email: req.body.email,
            password: hash,
            isAdmin: req.body.isAdmin
            });
            newUser.save()     // méthode save pour enregistrer le nouvelle utilisateur dans la base de donnée
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
            })
        .catch(error => res.status(500).json({ error }));   
    }
};

// Fonction de connexion
exports.login = (req, res, next) => {    
    
    const User = models.User;
    let email    = req.body.email;
    let password = req.body.password;
    let TOKEN = process.env.TOKEN;

    models.User.findOne({ where: { email: email }})     // Méthode findOne pour trouver l'utilisateur dans la base de donnée correspondant à l'adresse mail envoyé dans la requête 
        .then(user => {
            if (!user) {                        // Si l'utilisateur n'est pas trouvé dans la base de donnée
            return res.status(401).json({ error: 'Utilisateur introuvable !' });    // Affiche un status et message d'erreur
            }
            bcrypt.compare(password, user.password)    //fonction pour comparer le mot de passe entré dans la requête avec le mot de passe dans la base de données
                .then(valid => {
                    if (!valid) {                               //si le mot de passe est différent, renvoie un message d'erreur
                        return res.status(401).json({ error: 'Mot de passe incorrect !' }); 
                    }
                    res.status(200).json({                      // Requête validé avec un objet json contenant
                        userId: user.id,                       // L'identifiant de l'utilisateur dans la base de donnée
                        token: jwt.sign(                        // On génére un token valable pendant 24h
                            { userId: user.id },
                                TOKEN,
                            { expiresIn: '24h' },
                        )
                    });
                })
                .catch(error => res.status(500).json({ error : "erreur serveur"}));   //Erreur serveur
            })
        .catch(error => res.status(500).json({ error }));       //Erreur serveur
};

// Fonction userProfil
exports.userProfil = (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];          // Token attribué à l'utilisateur
    const decodedToken = jwt.verify(token, process.env.TOKEN);      // Token comparé 
    const userId = decodedToken.userId;

    models.User.findOne({ attributes: [ 'id', 'email', 'username', "password"], where : { id: userId } })       
        .then((user) => res.status(200).json({ user }))     // On affiche seulement les informations non sensibles
        .catch((err) => res.status(401).json({ err }));
};   

// Fonction updateProfil
exports.updateUser =  (req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];          // Token attribué à l'utilisateur
    const decodedToken = jwt.verify(token, process.env.TOKEN);      // Token comparé 
    const userId = decodedToken.userId; 

    models.User.findOne({ attributes: ['id'], where : { id: userId } })      
        .then(
            models.User.update({ 
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isAdmin: req.body.isAdmin
            },
            { where : { id: userId } })
            .then((response) => res.status(200).json({ response : " Informations modifiées avec succé !" }))     
            .catch((err) => res.status(401).json({ err })))     // On affiche seulement les informations non sensibles

        .catch((err) => res.status(401).json({ err }));
};

// Fonction deleteProfil
exports.deleteUser =  (req, res, next) => {
    
    models.User.destroy({ where: { id: Number(req.params.id) } })       // Destruction de l'utilisateur correspondant dans la base de données
        .then((response) => res.status(200).json({ response : " Compte supprimés de la basse de donnée" }))   
        .catch((err) => res.status(401).json({ err }));

};