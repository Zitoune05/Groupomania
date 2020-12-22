const jwt = require('jsonwebtoken');                                        // Module jsonwebtoken pour configurer les système de jetons

module.exports = (req, res, next) =>  {
    try {                                                                   // Si le jeton correspond   
        const token = req.headers.authorization.split(' ')[1];              // Token attribué à l'utilisateur
        const decodedToken = jwt.verify(token, 'a8df187e-914c-450f-90e9-90c0464b009b');      // Token comparé 
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID invalide !';
        } else {
            next();
        }
    } catch (error) {                                                       // Le jeton ne correspond pas
        res.status(401).json({ error : error | 'Requête non authentifiée !'});
    }
    
};
