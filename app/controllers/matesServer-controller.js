'use strict';

var mates = require('mongoose').model('Matematicas');


exports.getId = function(req, res, next) {

var id = req.query.id;
  mates.findOne({
    identi: id
  }, function(err, mates){
    if(err){
      return next(err);
    } else{
      res.json(mates);

      next();
    }
  });
};
  exports.getAll = (req, res, next) => {


    mates.find({}, (err,mates) => {
      if(err) {
        return next(err);
      } else {
        res.json(mates);
      }
    });
  }

  exports.update = (req, res, next) => {

    mates.findById(req.params.juego._id, (err,matematicas) => {
      if(err) {
        return next(err);
      } else {
        for(var i = 1; i<5; i++){
          mates.identi = 'juego' + i;
          mates.titulo = req.body.titulo || mates.titulo;
          mates.puntuacionTotal = req.body.puntuacionTotal || mates.juego.puntuacionTotal;
          mates.pregunta[i].pregunta = req.body.pregunta[i].pregunta || mates.juego.pregunta[i].pregunta;
          mates.pregunta [i].respuesta = req.body.pregunta[i].respuesta || mates.juego.pregunta[i].pregunta;
          mates.pregunta[i].puntuacion = req.body.pregunta[i].puntuacion || mates.juego.pregunta[i].puntuacion;
          mates.pregunta[i].opciones.a = req.body.pregunta[i].opciones.a || mates.juego.pregunta[i].opciones.a;
          mates.pregunta[i].opciones.b = req.body.pregunta[i].opciones.b || mates.juego.pregunta[i].opciones.b;
          mates.pregunta[i].opciones.c = req.body.pregunta[i].opciones.c || mates.juego.pregunta[i].opciones.c;
        }
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

    mates.findByIdAndRemove(req.params.juego._id, (err, mates) => {
      if(err) {
        res.send(err);
      } else {
        res.send('Juego eliminado correctamente');
      }
    })
  }
