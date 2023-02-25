const express = require('express');
const router = express.Router();

router.get('', function (req, res) {
    const skills = [
        {texto: 'Diseño Web'},
        {texto: 'Directivas'},
        {texto: 'Gestion de Proyectos'},
        {texto: 'Algoritmia'},
        {texto: 'Desarrollo de Software'},
        {texto: 'Marketing'},
        {texto: 'Comunicación'},
        {texto: 'Trabajo en equipo'},  
    ]

    res.render('habilidades', {
        skills
    });
});

module.exports = router;