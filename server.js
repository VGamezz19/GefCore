//le decimos a nuestro servidor el entorno en el que trabajamos:
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 4000;

//cargamos las dependencias necesarias
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

//creamos las variables para poder usar nuestras dependencias en el servidor
var db = mongoose();
var app = express();
var passport = passport();



//elegimos el puerto por el cual escucharemos

app.listen(port, () => {
  console.log(`you are listening at port ${port}`);
});

//exportamos la variable app
module.exports = app;
