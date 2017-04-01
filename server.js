//le decimos a nuestro servidor el entorno en el que trabajamos:
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//cargamos las dependencias necesarias
var mongoose = require('./config/mongoose'),
    express = require('./config/express');

//creamos las variables para poder usar nuestras dependencias en el servidor
var db = mongoose();
var app = express();

//elegimos el puerto por el cual escucharemos

app.listen(4000, function(){
  console.log('you are listening at port 4000');
});

//exportamos la variable app
module.exports = app;
