const express = require('express');
const router = express.Router();

router.get('', function (req, res) {
    res.render('trayectoria');
});

module.exports = router;