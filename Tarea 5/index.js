const express = require('express');
const mongoose = require('mongoose');
const rutas = require('./rutas');
const routes = require('./src/rutas');
require('dotenv').config();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');

const mongoUrl = process.env.MONGO_URL;

const app = express();

const port = process.env.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('', routes);
rutas(app)

mongoose.connect(mongoUrl).then(() => {
    console.log('Se conecto a la base de datos');

    app.listen(port, function () {
        console.log('App is running in port ' + port);
    });

}).catch(err => {
    console.log('No se pudo conectar a la base de datos', err);
});