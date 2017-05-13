'use strict';

var ingles = require('mongoose').model('Ingles');


exports.getId = (req, res, next) => {

  var iden =  req.query.id;
  ingles.findOne({
    identi: iden
  }, function(err, ingles){
    if(err){
      return next(err);
    } else{
      res.json(ingles);

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

  exports.getPreguntas = function(req,res,next)  {

    var id = req.body.identi
    ingles.aggregate([
      {
          $match: {
            identi: id
                  }
      },
      {
          $unwind: '$preguntas'
      },
      {
          $group: { _id: '$preguntas'}
      }
    ], function (err, result) {
          if (err) {
              next(err);
          } else {
              res.json(result);
          }
      });
  }
