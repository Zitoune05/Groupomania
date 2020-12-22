const express = require('express');
const router = express();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);        // Routes des requêtes d'inscription et de connexion 
router.post('/login', userCtrl.login);
router.get('/test', function (req, res) {
  res.send('TEST OK');
});

module.exports = router;
