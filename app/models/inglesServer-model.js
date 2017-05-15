
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




    var inglesSchema = new Schema({

          identi: String,
          titulo: String,
          puntuacionTotal: Number,
          nivel: Number,
          preguntas: [{
                   pregunta: {
                     identi: String,
                     titulo: String,
                     respuesta: String,
                     puntuacion: Number,
                     opciones: [
                             {opcion: String}
                         ]
                   }
                 }]

    });

    mongoose.model('Ingles', inglesSchema);
