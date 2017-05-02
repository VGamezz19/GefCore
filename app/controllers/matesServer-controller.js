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
}
