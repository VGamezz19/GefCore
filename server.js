process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();






app.listen(4000, function(){
  console.log('you are listening at port 4000');
});

module.exports = app;
