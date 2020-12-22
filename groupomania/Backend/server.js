const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const userCtrl = require('./controllers/user');

app.use((req, res, next) => {                   // Donne l'accès du backend au frontend                                
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});




app.post('/api/signup', userCtrl.signup);
app.post('/api/login', userCtrl.login);


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Server backend only');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
