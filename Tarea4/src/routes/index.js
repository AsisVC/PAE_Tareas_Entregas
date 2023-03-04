const router = require('express').Router();
const express = require('express');
const path = require('path');

const controladorNoticias = require('../controladores/noticias');

router.use('/assets', express.static(path.join(__dirname, 'assets')));

router.get('/', function (req, res) {
    
    if(req.query.busqueda){
        controladorNoticias.getNoticias(req, res);
    }else{
        console.log('nada');
        res.render('home');
    }

    console.log('Menu Central');
});

router.get('*', function (req, res) {
        res.sendFile(__dirname + '/src/views/error404.html');
});

module.exports = router;