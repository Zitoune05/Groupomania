const express = require('express');                 
const router = express.Router();                            //Création d'un router avec la méthode .Router() d'express

const publicationCtrl = require('../controllers/publication');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Création des routes pour les différentes requêtes 
// router.get('/', auth, publicationCtrl.getAllPublication);
// router.get('/:id', auth, publicationCtrl.getOnePublication);
router.post('/new', auth, multer, publicationCtrl.createMessage);
// router.put('/:id', auth, multer, publicationCtrl.modifyPublication);
// router.delete('/:id', auth, publicationCtrl.deletePublication);

module.exports = router;