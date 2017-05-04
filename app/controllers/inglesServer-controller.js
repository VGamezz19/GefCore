'use strict';

var ingles = require('mongoose').model('Ingles');


exports.getId = (req, res, next, iden) => {

  ingles.findOne({
    identi: iden
  }, function(err, ingles){
    if(err){
      return next(err);
    } else{
      res.json(req.ingles);

      next();
    }
  });
  }

  exports.getAll = (req, res, next) => {


    ingles.find({}, (err,ingles) => {
      if(err) {
        return next(err);
      } else {
        res.json(ingles);
      }
    });
  }
  exports.update = (req, res, next) => {

    ingles.findById(req.params._id, (err,matematicas) => {
      if(err) {
        return next(err);
      } else {

        for(var i = 1; i<5; i++){
          ingles.identi = 'juego' + i;
          ingles.titulo = req.body.titulo || ingles.titulo;
          ingles.puntuacionTotal = req.body.puntuacionTotal || ingles.juego.puntuacionTotal;
          ingles.pregunta[i].pregunta = req.body.pregunta[i].pregunta || ingles.juego.pregunta[i].pregunta;
          ingles.pregunta [i].respuesta = req.body.pregunta[i].respuesta || ingles.juego.pregunta[i].pregunta;
          ingles.pregunta[i].puntuacion = req.body.pregunta[i].puntuacion || ingles.juego.pregunta[i].puntuacion;
          ingles.pregunta[i].opciones.a = req.body.pregunta[i].opciones.a || ingles.juego.pregunta[i].opciones.a;
          ingles.pregunta[i].opciones.b = req.body.pregunta[i].opciones.b || ingles.juego.pregunta[i].opciones.b;
          ingles.pregunta[i].opciones.c = req.body.pregunta[i].opciones.c || ingles.juego.pregunta[i].opciones.c;
        }


        ingles.save((err, ingles) => {
          if(err) {
            res.send(err);
          } else {
            res.send(ingles);
          }
        });
      }
    });
  }

  exports.create = (req, res, next) => {

    var ingles = new ingles(req.body);

    ingles.save((err, ingles) => {
      if(err) {
        res.send(err);
      }

      res.send(ingles);
    });
  }

  exports.delete = (req,res,next) => {

    ingles.findByIdAndRemove(req.params.juego._id, (err, ingles) => {
      if(err) {
        res.send(err);
      } else {
        res.send('Juego eliminado correctamente');
      }
    })
  }
