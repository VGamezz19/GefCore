'use strict';

//cargamos las dependencias
var users = require('../controllers/usersServer-controller'),
    passport = require('passport');


//definimos el metodo routes module

module.exports = function(app){


  //seteamos las rutas de singUp

  app.route('/singup')
      .post(users.singUp);

  //seteamos la ruta singIn
  app.route('/singin')
      .get(users.renderSingIn)
      .post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
        failureFlash: true,

      }));

      app.route('/currentUser')
      .get(users.userById);

      app.route('/getAll')
      .get(users.list);

      app.route('/updateGame')
      .post(users.juego);

      app.route('/puntosMates')
      .post(users.updatePuntosMates);

  //seteamos la ruta singOut
  app.get('/singout',users.singOut);

};
