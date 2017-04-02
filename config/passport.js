//llamamos a las dependencias
var passport = require('passport'),
    mongoose = require('mongoose');


module.exports = function() {
  var user = mongoose.model('User');


  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    user.findOne({
      _id: id
    }
  , '-password -salt', function(err, user){
    done(err, user);
  });
  });

require('./estrategies/local.js')();
};
