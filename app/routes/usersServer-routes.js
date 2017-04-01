'use strict';

//cargamos el controller usersServer-model
var users = require('../controllers/usersServer-controller');


//definimos el metodo routes module

module.exports = function(app){

  //seteamos las rutas de users

  app.route('/users')
  .post(users.create)
  .get(users.list);
};
