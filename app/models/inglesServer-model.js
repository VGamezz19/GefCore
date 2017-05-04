
'use strict';

var mongoose = require('mongoose'),
    schema = mongoose.Schema;




    var inglesSchema = new Schema({

            juego: [{
              titulo: String,
              puntuacionTotal: Number,
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

    mongoose.model('Ingles', inglesSchema);
