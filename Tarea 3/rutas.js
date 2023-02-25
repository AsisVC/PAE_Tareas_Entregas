const express = require('express');
const path = require('path');

module.exports = function(app){

    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', function (req, res) {
        console.log('Menu Central');
        //res.send('Api works');
        res.render('inicio');
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/src/views/error404.html');
    });
}