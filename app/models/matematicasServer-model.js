
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




    var matematicasSchema = new Schema({

              identi: String,
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
              },
              pregunta2: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              },
              pregunta3: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              },
              pregunta4: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: {
                        a: String,
                        b: String,
                        c: String
                    }
              },
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
