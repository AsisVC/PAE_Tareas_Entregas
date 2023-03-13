const express = require('express');
const router = express.Router();

router.get('', function (req, res) {
    const hobbies = [
        {titulo: 'Jugar Videojuegos', desc: 'En mi infancia fui un fanatico de los videojuegos, desde jugar al gameboy hasta tener mi propia PC para poder probar y jugar increibles videojuegos.'},
        {titulo: 'Gym y Basquetbol', desc: 'Procuro cada dia invertir un rato de mi tiempo en practicar deportes o ir al gimnasio con el objetivo de verme fuerte y generar confianza conmigo mismo y mi entorno.'},
        {titulo: 'Tocar el Piano', desc: 'De niño me apasionaba la musica y siempre habia querido aprender a tocar un instrumento, hoy en dia practico tocar el piano para cumplir con ese sueño.'}
    ]

    res.render('hobbies', {
        hobbies
    });
});

module.exports = router;