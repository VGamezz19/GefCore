'use strict';

//cargamos las dependencias
var users = require('../controllers/usersServer-controller'),
    passport = require('passport');


//definimos el metodo routes module

module.exports = function(app){


  //seteamos las rutas de singUp

  app.route('/singup')
      .get(users.list)
      .post(users.singUp);

  //seteamos la ruta singIn
  app.route('/singin')
      .get(users.renderSingIn)
      .post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true,
      }));

  //seteamos la ruta singOut
  app.get('/singout',users.singOut);

};
