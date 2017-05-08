
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




    var matematicasSchema = new Schema({

              identi: String,
              titulo: String,
              puntuacionTotal: Number,
              nivel: Number,
              preguntas: [{
                pregunta: {
                  pregunta: String,
                  respuesta: String,
                  puntuacion: Number,
                  opciones: {
                          a: String,
                          b: String,
                          c: String
                      }
                }
              }]
    });

    mongoose.model('Matematicas', matematicasSchema);
