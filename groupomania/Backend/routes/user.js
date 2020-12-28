const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', userCtrl.signup);        
router.post('/login', userCtrl.login);
router.get('/me', auth, userCtrl.userProfil);
router.put('/users/:id',auth, userCtrl.updateUser);
router.delete('/users/:id', auth, userCtrl.deleteUser);

module.exports = router;
