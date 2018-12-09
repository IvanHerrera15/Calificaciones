//Importar mongoose
var mongoose = require('mongoose');

// Crear una referencia a la Schema
var Schema = mongoose.Schema;

// Definir el esquema materia
var materiaSchema = new Schema({
    Codigo_Materia: String,
    Nombre_Materia: String,
    Calificacion: Number
});

// Definir el esquema asesoria
var alumnoSchema = new Schema({
    No_Control: Number,
    Nombres: String,
    Apellidos: String,
    Telefono: Number,
    Materias: [materiaSchema]
});

// Hacer disponible la definición del modelo
module.exports = mongoose.model('Alumnos', alumnoSchema);