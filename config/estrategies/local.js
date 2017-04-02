//llamamos a las dependencias necesarias
var pass = require('passport'),
    Local = require('passport-local').Strategy,
    User = require('mongoose').model('User');

//creamos el modulo de autenticacion
module.exports = function(){
    pass.use(new Local(function(username, password, done){
        User.findOne({
            username: username
        }, function(err, user){
            if (err){
                return done(err);
            }
            if(!user){
                return done(null, false, {message: 'Usuario no registrado'});
            }

            if(!user.authenticate(password)){
                return done(null, false, {message: 'Contraseña erronea'});
            }

            return done(null, user);
        });
    }));
};
