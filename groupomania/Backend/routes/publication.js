const express = require('express');                 
const router = express.Router();                            //Création d'un router avec la méthode .Router() d'express

const publicationCtrl = require('../controllers/publication');

router.get('/', publicationCtrl.getAllpublications );              // Création des routes pour différentes requêtes 
router.post('/',publicationCtrl.createpublication );
router.post('/:id/like',publicationCtrl.likeCtrl );
router.get('/:id', publicationCtrl.getOnepublication );
router.put('/:id',publicationCtrl.modifypublication );
router.delete('/:id',publicationCtrl.deletepublication );

module.exports = router;