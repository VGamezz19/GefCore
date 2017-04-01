//cargamos las dependencias necesarias
var config = require('./config'),
    session = require('express-session');
    express = require('express');
    morgan = require('morgan');
    compress = require('compression');
    bodyParser = require('body-parser');
    methodOverride = require('method-override');


//Aplicamos los entornos de desarrollo y de produccion para que node los verifique
//cuando es iniciado

module.exports =function(){
  var app = express();
  if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
  } else if(process.env.NODE_ENV === 'production'){
    app.use(compress());
  }


  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({
      saveUnitialized: true,
      resave: true,
      secret: config.sessionSecret
  }));
  //configuramos el motor de renderizado
  app.set('views', 'app/views');
  app.set('view engine', 'ejs');

  //cargamos el enrutamiento de nuestra aplicacion
  require('../app/routes/indexServer-routes.js')(app);
  require('../app/routes/usersServer-routes.js')(app);


  //configuramos el servicio de archivos estaticos.
  app.use(express.static('./public'));

  //devolvemos la instancia de la aplicacion express
  return app;
};
