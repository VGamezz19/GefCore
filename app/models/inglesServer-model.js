
'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;




    var inglesSchema = new Schema({

      juegos: [{

            juego: [{
              identi: String
              titulo: String,
              puntuacionTotal: Number,
              pregunta: [{
                pregunta: String,
                respuesta: String,
                puntuacion: Number
              }]
            }]
      }]

    });

    mongoose.model('Ingles', inglesSchema);
