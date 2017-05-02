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

  exports.getAll = (req, res, next) => {


    mates.find({}, (err,ingles) => {
      if(err) {
        return next(err);
      } else {
        res.json(ingles);
      }
    });
  }
}
