'use strict';

//cargamos las dependencias
var users = require('../controllers/usersServer-controller'),
  passport = require('passport');


//definimos el metodo routes module

module.exports = function(app) {


  //seteamos las rutas de singUp

  app.route('/singup')
    .post(users.singUp);
  app.route('/error')
    .get(users.renderSingUp);

  app.route('/logError')
    .get(users.renderSingIn);

  //seteamos la ruta singIn
  app.route('/singin')
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true,

    }));

  app.route('/currentUser')
    .get(users.userById);

  app.route('/getAll')
    .get(users.list);

  app.route('/createGame')
    .post(users.juego);

  app.route('/updateGame')
    .post(users.updateJuego);

  app.route('/deleteGame')
    .post(users.deleteJuego);

  app.route('/puntosMates')
    .post(users.updatePuntosMates);

  app.route('/createIngles')
    .post(users.juegoIngles);

  app.route('/updateIngles')
    .post(users.updateIngles);
  app.route('/deleteIngles')
    .post(users.deleteIngles);

  app.route('/puntosIngles')
    .post(users.updatePuntosIngles)

  //seteamos la ruta singOut
  app.get('/singout', users.singOut);

};
