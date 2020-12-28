const jwt = require('jsonwebtoken');                                        // Module jsonwebtoken pour configurer les système de jetons
let TOKEN = process.env.TOKEN;

module.exports = (req, res, next) =>  {
    try {                                                                   // Si le jeton correspond   
        const token = req.headers.authorization.split(' ')[1];              // Token attribué à l'utilisateur
        const decodedToken = jwt.verify(token, process.env.TOKEN);      // Token comparé 
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID invalide !';
        } else {
            next();
        }
    } 
    catch (error) {                                                       // Le jeton ne correspond pas
        res.status(401).json({ error : error | 'Requête non authentifiée !'});
    }
    
};


