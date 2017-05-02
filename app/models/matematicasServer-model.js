
'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;




    var matematicasSchema = new Schema({

      juegos: [{

            juego: [{
              identi: Number,
              titulo: String,
              puntuacionTotal: Number,
              pregunta: [{
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: Array
              }]
            }]
      }]

    });

    mongoose.model('Matematicas', matematicasSchema);
