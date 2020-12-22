const bcrypt = require('bcrypt');                           // Package pour crypter le mot de passe
const jwt = require('jsonwebtoken');                        //Package pour créer des jetons uniques
const emailValidator = require('email-validator');          //plugin de validation d'email
const passWordValidator = require('password-validator');    //plugin de validation de mot de passe

const databaseConnected = require("../mysqlconfig");

let schemaPassWord = new passWordValidator();   // variable de validation de mot de passe

schemaPassWord 
.is().min(8)                                    //longeur minimale 8
.is().max(50)                                   //longeur maximale 50
.has().uppercase()                              //Doit avoir des lettres majuscules
.has().lowercase()                              //Doit avoir des lettres minuscules
.has().digits(1)                                //Doit avoir au moins 1 chiffre
.has().not().spaces()                           //Les espaces sont interdits
.is().not().oneOf(['Passw0rd', 'Password123'])  //Liste noire de ces valeurs 





//Création de la base de donné
exports.createDbNamed   = (req, res, next) => {

    // Variable databaseCreate -- > SQL
    let databaseCreate = 'CREATE DATABASE Groupomnia';    

    databaseConnected.query(databaseCreate, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.send('databse created')
  });
};

//Création de la table user 
exports.createDataTable = (req, res) => {
    
    // Variable table -- > SQL
    let table = 'CREATE TABLE user  ( id int NOT NULL AUTO_INCREMENT, email varchar(100) NOT NULL, username  varchar(100) NOT NULL,password varchar(250) NOT NULL, isAdmin tinyint NOT NULL DEFAULT 0 ,PRIMARY KEY (id),UNIQUE KEY id_UNIQUE (id),UNIQUE KEY email_UNIQUE (email),UNIQUE KEY username_UNIQUE (username))ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8';
    
    databaseConnected.query(table, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('table created !')
    });

};

// Fonction d'inscription
exports.signup = (req, res, next) => {  
console.log("signup recu");  

    if (!emailValidator.validate(req.body.email) || !schemaPassWord.validate(req.body.password)) {              //Si l'email ou le mot de passe est invalide alors           
        res.status(400).json({ message : ' Votre email ou mot de passe est invalide. Veuillez réessayer !'});   // Affiche un status et message d'erreur
    } 
    else {
    bcrypt.hash(req.body.password, 10)          // Fonction de cryptage du mot de passe avec le mot de passé par le frontend et le solde de l'algorythme de hashage 
        .then( hash => {                        // On récupère le hash de mot de passe
            const user = new User({             // Création du nouvelle utilisateur  
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        // Insertion dans notre DataBase
        databaseConnected.query(`INSERT INTO user SET ?`, user, (err, result, field) => {      // src : https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp
            if (err) {
                console.log(err)
                return res.status(400).json("erreur")
            }
            return res.status(201).json({message : 'Votre compte a bien été crée !'},)
        });
    })
        .catch(error => res.status(500).json({ error }));   
    }
};

// Fonction de connexion
exports.login = (req, res, next) => {       
    console.log("login recu");  

    User.findOne({ email: req.body.email })     // Méthode findOne pour trouver l'utilisateur dans la base de donnée correspondant à l'adresse mail envoyé dans la requête 
        .then(user => {
            if (!user) {                        // Si l'utilisateur n'est pas trouvé dans la base de donnée
            return res.status(401).json({ error: 'Utilisateur introuvable !' });    // Affiche un status et message d'erreur
        }
        bcrypt.compare(req.body.password, user.password)    //fonction pour comparer le mot de passe entré dans la requête avec le mot de passe dans la base de données
            .then(valid => {
                if (!valid) {                               //si le mot de passe est différent, renvoie un message d'erreur
                    return res.status(401).json({ error: 'Mot de passe incorrect !' }); 
                }
                res.status(200).json({                      // Requête validé avec un objet json contenant
                    userId: user._id,                       // L'identifiant de l'utilisateur dans la base de donnée
                    token: jwt.sign(                        // On génére un token valable pendant 24h
                        { userId: user._id },
                        process.env.KEY_TOKEN,
                        { expiresIn: '24h' },
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));   //Erreur serveur
        })
        .catch(error => res.status(500).json({ error }));       //Erreur serveur
};


  //Affichage de tous les utilisateurs
  exports.getUsers = (req, res, next) => {
    databaseConnected.query(
      'SELECT id, username, isAdmin, email FROM user WHERE isAdmin=0',
      function (error, results) {
        if (error) {
          return res.status(400).json(error)
        }
        return res.status(200).json( results )
      }
    )
  }