//Importar los módulos
var express = require('express');
var Alumno = require('../models/alumnos');

var router= express.Router();

//Registrar Alumno
router.route('/alumnos')
    .post(function(req, res) {
        var alumno = new Alumno();
        alumno.No_Control = req.body.No_Control;
        alumno.Nombres = req.body.Nombres;
        alumno.Apellidos = req.body.Apellidos;
        alumno.Telefono = req.body.Telefono;
        alumno.Materias = req.body.Materias;
        alumno.save(function(err) {
            if (err) { res.send(err); } 
            res.json({ message: "Alumno Registrado" })
        });
    });

module.exports= router;
