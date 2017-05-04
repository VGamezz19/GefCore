//cargamos las dependencias necesarias
var config = require('./config'),
    session = require('express-session'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    passport = require('passport');



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
      saveUninitialized: true,
      resave: true,
      secret: config.sessionSecret
  }));
  //configuramos el motor de renderizado
  app.set('views', 'app/views');
  app.set('view engine', 'ejs');

  //registramos los middleware de passport y flash
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());


  //cargamos el enrutamiento de nuestra aplicacion
  require('../app/routes/indexServer-routes.js')(app);
  require('../app/routes/usersServer-routes.js')(app);
  require('../app/routes/matesServer-routes.js')(app);
  require('../app/routes/inglesServer-routes.js')(app);


  //configuramos el servicio de archivos estaticos.
  app.use(express.static('./public'));
  app.get('*', function(req, res){
    res.redirect('/')
  });
  //devolvemos la instancia de la aplicacion express
  return app;
};
