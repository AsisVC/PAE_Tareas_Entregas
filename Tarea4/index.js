const express = require('express');
const routes = require('./src/routes');
const {engine} = require('express-handlebars');
const app = express();
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = 3000;

app.use('', routes)

app.listen(port, function() {
    console.log('App is running in port ' + port);
});