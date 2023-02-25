const express = require('express');
const rutas = require('./rutas'); //rutas.js
const routes = require('./src/rutas'); //carpeta rutas dentro de src
const {engine} = require('express-handlebars');
const app = express();
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = 3000;

app.use('', routes);
rutas(app);

app.listen(port, function() {
    console.log('App is running in port ' + port);
});