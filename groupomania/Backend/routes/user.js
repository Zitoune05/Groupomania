const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// Routes des différentes requêtes 
router.get('/createdb', userCtrl.createDbNamed);
router.post('/signup', userCtrl.signup);        
router.post('/login', userCtrl.login);


module.exports = router;
