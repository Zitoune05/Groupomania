const express = require('express');                 
const router = express.Router();                            //Création d'un router avec la méthode .Router() d'express

const publicationCtrl = require('../controllers/publication');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Création des routes pour les différentes requêtes 
router.get('/publications', auth, publicationCtrl.getAllpublications);
router.get('/publications/one', auth, publicationCtrl.getOnePublication);
router.post('/new', auth, multer, publicationCtrl.createMessage);
router.put('/publications/:id', auth, multer, publicationCtrl.modifypublication);
router.delete('/publications/:id', auth, publicationCtrl.deletePublication);

module.exports = router;