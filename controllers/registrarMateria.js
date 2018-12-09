//Importar los módulos
var express = require('express');
var Alumno = require('../models/alumnos');

//Crear una referencia al objeto express.Router 
var router = express.Router();

//Registrar Materia
router.route('/alumnos/:nc')
    .put(function(req,res){
        Alumno.update(
            {No_Control:req.params.nc},
            {$push:{Materias:req.body}},
            function(err){
                if(err){res.send(err)}
                res.send("Materia Registrada")
            }
        )
    });

module.exports= router;
