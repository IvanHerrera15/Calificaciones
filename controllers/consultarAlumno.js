//Importar los módulos
var express = require('express');
var Alumno = require('../models/alumnos')

//Crear una referencia al objeto express.Router 
var router = express.Router();

//Consultar Todos los Alumnos
router.route('/alumnos')
.get(function(req, res) {
    Alumno.find({},{_id:0,__v:0,"Materias._id":0,"Materias.Unidades._id":0},function(err, alumnos) {
        if (err) { res.send(err) }
        res.json(alumnos); 
    });
});

//Exportar el objeto router 
module.exports = router;
