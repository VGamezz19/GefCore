
'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;




    var matematicasSchema = new Schema({

            
              titulo: String,
              puntuacionTotal: Number,
              pregunta1: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              }
              pregunta2: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              }
              pregunta3: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              }
              pregunta4: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              }
              pregunta5: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              }


    });

    mongoose.model('Matematicas', matematicasSchema);
