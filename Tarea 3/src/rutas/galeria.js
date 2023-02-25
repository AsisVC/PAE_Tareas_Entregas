const express = require('express');
const router = express.Router();

router.get('', function (req, res) {
    const imgs = [
        {src: '/assets/img/carrusel1.jpeg', alt: 'imagen 1 Asis', title: 'Asis con amigos en un bar'},
        {src: '/assets/img/carrusel6.jpeg', alt: 'imagen 2 Asis', title: 'Asis con amigos en una fiesta'},
        {src: '/assets/img/carrusel8.jpeg', alt: 'imagen 3 Asis', title: 'Asis con la World Cup'},
        {src: '/assets/img/carrusel2.jpeg', alt: 'imagen 4 Asis', title: 'Asis con su hermana'},
        {src: '/assets/img/carrusel5.jpeg', alt: 'imagen 5 Asis', title: 'Asis modo serio'},
        {src: '/assets/img/carrusel4.jpeg', alt: 'imagen 3 Asis', title: 'Asis con un amigo en monterrey'},
        {src: '/assets/img/carrusel7.jpeg', alt: 'imagen 3 Asis', title: 'Asis navideño'},
        {src: '/assets/img/carrusel9.jpeg', alt: 'imagen 3 Asis', title: 'Asis con amigos en el estadio'}
    ]

    res.render('galeria', {
        imgs
    });
});

module.exports = router;