//Importar los módulos
var express = require('express');
var Alumno = require('../models/alumnos');

//Crear una referencia al objeto express.Router 
var router = express.Router();

//Ruta a raiz
router.get('/', function(req, res) {
    res.send('API ALUMNOS' ); 
});

module.exports= router;
