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

    mates.findByIdAndRemove(req.body.juego._id, (err, mates) => {
      if(err) {
        res.send(err);
      } else {
        res.send('Juego eliminado correctamente');
      }
    })
  }

  

  exports.getPreguntas = function(req,res,next)  {

    var id = req.body.identi
    mates.aggregate([
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
