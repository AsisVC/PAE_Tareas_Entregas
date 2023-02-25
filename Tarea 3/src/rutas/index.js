const router = require('express').Router();
const rutas_galeria = require('./galeria');
const rutas_habilidades = require('./habilidades');
const rutas_hobbies = require('./hobbies');
const rutas_trayectoria = require('./trayectoria');

router.use('/galeria', rutas_galeria);
router.use('/habilidades', rutas_habilidades);
router.use('/hobbies', rutas_hobbies);
router.use('/trayectoria', rutas_trayectoria);

module.exports = router;
