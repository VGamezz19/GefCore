'use strict';

var mates = require('mongoose').model('Matematicas');


exports.getId = (req, res, next, iden) => {

  mates.findOne({
    identi: iden
  }, function(err, matematicas){
    if(err){
      return next(err);
    } else{
      res.json(req.matematicas);

      next();
    }
  });

  exports.getAll = (req, res, next) => {


    mates.find({}, (err,matematicas) => {
      if(err) {
        return next(err);
      } else {
        res.json(matematicas);
      }
    });
  }

  exports.update = (req, res, next) => {

    mates.findById(req.params.juego._id, (err,matematicas) => {
      if(err) {
        return next(err);
      } else {
        mates.juego.titulo = req.body.titulo || mates.titulo;
        mates.juego.puntuacionTotal = req.body.puntuacionTotal || mates.juego.puntuacionTotal;
        mates.juego.pregunta.pregunta = req.body.pregunta.pregunta || mates.juego.pregunta.pregunta;
        mates.juego.pregunta.respuesta = req.body.pregunta.respuesta || mates.juego.pregunta.pregunta;
        mates.juego.pregunta.puntuacion = req.body.pregunta.puntuacion || mates.juego.pregunta.puntuacion;
        mates.juego.pregunta.opciones.a = req.body.pregunta.opciones.a || mates.juego.pregunta.opciones.a;
        mates.juego.pregunta.opciones.b = req.body.pregunta.opciones.b || mates.juego.pregunta.opciones.b;
        mates.juego.pregunta.opciones.b = req.body.pregunta.opciones.c || mates.juego.pregunta.opciones.c;

        mates.save((err, mates) => {
          if(err) {
            res.send(err);
          } else {
            res.send(mates);
          }
        });
      }
    });
  }

  exports.create = (req, res, next) => {

    var mates = new mates(req.body);

    mates.save((err, mates) => {
      if(err) {
        res.send(err);
      }

      res.send(mates);
    });
  }

  exports.delete = (req,res,next) => {

    mates.findByIdAndRemove(req.params.juego._id)
  }
}
