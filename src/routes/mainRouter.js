// Acá nos falta express y el router
const express = require('express');
const router = express.Router();

// Aća nos falta traer el controller
const main = require('../controllers/mainController');

// Acá definimos las rutas
router.get("/", main.home);

router.get('/detalleMenu/:id', main.detalleMenu)

// Acá exportamos el resultado
module.exports = router; 







