//cargamos las dependencias
var config = require('./config'),
    mongoose = require('mongoose');


module.exports =function() {

  var db= mongoose.connect(config.db);


      //cargamos los modelos necesarios
      require('../app/models/usersServer-model');
      require('../app/models/matematicasServer-model');
      require('../app/models/inglesServer-model');




      //devolvemos la instancia de conexión a mongoose
      return db;

};
