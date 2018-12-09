//Importar los módulos
var express= require('express');
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var index= require('./controllers/index');
var registrarAl= require('./controllers/registrarAlumno');
var registrarMat= require('./controllers/registrarMateria');
var consultar= require('./controllers/consultarAlumno');

// Crear una referencia a express
var app= express();

//Configurar la App con bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definir el puerto de la aplicación
var port= 3000;

//Conectarse a la base de datos
require("./config/db");

//Rutas con el prefijo api
app.use('/plf', index);
app.use('/plf', registrarAl);
app.use('/plf', registrarMat);
app.use('/plf', consultar);

//Inicializar el server express con el puerto de escucha
app.listen(port);

app.use(function(request, response) { 
    response.status(404).send("Página no encontrada!");
});

//Imprimir mensaje de bienvenida
console.log('Servidor escuchando en puerto:' + port);
