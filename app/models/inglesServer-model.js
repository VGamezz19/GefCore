
'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;




    var inglesSchema = new Schema({

            juego: [{
              identi: Number,
              titulo: String,
              puntuacionTotal: Number,
              pregunta: {
                pregunta: String,
                respuesta: String,
                puntuacion: Number,
                opciones: Array
              }
            }]

    });

    mongoose.model('Ingles', inglesSchema);
