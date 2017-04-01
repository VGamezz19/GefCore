'use strict';


//cargamos nuestro modelo
var User = require('mongoose').model('User');

//creamos el metodo create

exports.create = function(req,res, next){

  //creamos una instancia de User
  var user = new User(req, body);

  //usamos el metodo save para guardar nuestro usuario nuevo en la coleccion
  User.save(function(err, user){
    if(err){
      //llamaremos asi al siguiente middleware si nos sale un error
      return next(err);
    } else{
      //usamos el objeto response para enviar una respuesta json
      res.json(user);
    }
  });
};
//creamos el metodo list para listar nuestra coleccion de usuarios
exports.list = function(req,res,next){

  //listamos nuestros usarios a traves del metodo find de mongoose

  User.find({}, function(err, users){
    if(err){
      return next(err);
    } else{

      res.json(users);
    }
  });
};
