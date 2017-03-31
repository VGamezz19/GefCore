var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT||4000;
var mongoose = require('mongoose');
var dbName = 'gefcore';


app.use(express.static(path.join(__dirname, 'public/app')));
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, function () {
  console.log('Example app listening on port 4000!');
});

mongoose.connect('mongodb://localhost/'+ dbName,function(error){
  if(error){
      throw error;
   }else{
      console.log('Conectado a MongoDB');
}});
