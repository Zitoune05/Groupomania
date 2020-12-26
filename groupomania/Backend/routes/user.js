const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.get('/createdataBase', userCtrl.createDbNamed );
router.get('/createtables', userCtrl.createDataTable);
//router.get('/getusers', userCtrl.getUsers);
//router.get('/getoneuser/:id', userCtrl.getOneUser)

router.post('/signup', userCtrl.signup);        
router.post('/login', userCtrl.login);
//router.post('/updateuser/:id', auth, userCtrl.updateUser);
//router.post('/deleteUser', auth, userCtrl.deleteUser);
//router.get('/test', function (req, res) {res.send('TEST OK');});

module.exports = router;
