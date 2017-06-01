'use strict';


//cargamos nuestro modelo
var User = require('mongoose').model('User'),
  passport = require('passport'),
  mail = require('nodemailer'),
  async = require('async'),
  crypto = require('crypto');

//creamos el metodo para manejar los erorres

var getErrorMessage = function (err) {

  var message = '';
  //cuando aparece un error en la DB lo mostramos

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Usuario ya registrado';
        break;
      //mensaje generico
      default:
        message = 'Ha ocurrido un error!';
    }
  }
  else {
    //Guarda el primer mensaje de error de la listar
    for (var errName in err.errors) {
      if (err.errors[errName].message) { message = err.errors[errName].message };
    }
  }
  //devolvemo el error
  return message;

};

//creamos el metodo para renderizar singIn
exports.renderSingIn = function (req, res, next) {
  //si no hay alguien registrado renderizamos singIn
  if (!req.user) {
    //usamos el objeto response para renderizar singIn

    res.render('singIn', {

      //configuramos la variable title
      title: 'Identificate',
      //cogemos la variable de los mensajes de error
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};

exports.renderForgot = (req, res, next) => {
  if (!req.user) {
    res.render('forgot', {
      messages: req.flash('error') || req.fash('info')
    });
  } else {
    res.redirect('/');
  };
};

exports.renderSingUp = function (req, res, next) {
  //si no hay alguien registrado renderizamos singIn, en otro caso renderizamos la pagina principal
  if (!req.user) {
    //usamos el objeto response para renderizar singUp

    res.render('singUp', {

      //configuramos la variable title
      title: 'registrate',
      //cogemos la variable de los mensajes de error
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};

//creamos el metodo create

exports.create = function (req, res, next) {

  //creamos una instancia de User
  var user = new User(req, body);

  //usamos el metodo save para guardar nuestro usuario nuevo en la coleccion
  User.save(function (err, user) {
    if (err) {
      //llamaremos asi al siguiente middleware si nos sale un error
      return next(err);
    } else {
      //usamos el objeto response para enviar una respuesta json
      res.json(user);
    }
  });
};
//creamos el metodo list para listar nuestra coleccion de usuarios
exports.list = function (req, res, next) {

  //listamos nuestros usarios a traves del metodo find de mongoose

  User.find({}, function (err, users) {
    if (err) {
      return next(err);
    } else {

      res.json(users);
    }
  });
};

//creamos el metodo read para leer documentos de MongoDB

exports.read = function (req, res) {

  res.json(req.user);
};
//creamos el metodo update para modificar documentos
exports.update = function (req, res, next) {
  User.findByIdAndUpdate(req.user.id, req.body, function (err, user) {
    if (err) {
      return next(err);
    } else {

      res.json(user);
    }
  });
};

exports.delete = function (req, res, next) {
  req.user.remove(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(req.user);
    }
  });
};

//creamos el metodo userById para buscar el usuario por su id
exports.userById = function (req, res, next) {

  var id = req.user.id;
  User.findOne({
    _id: id
  }, function (err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
      res.end();
    }
  });
};

//metodo singUp
exports.singUp = function (req, res, next) {
  if (!req.user) {

    var user = new User(req.body);
    var message = null;

    //configuramos la propiedad user providerId
    user.provider = 'local';
    user.puntuacion.matematicas = 0;
    user.puntuacion.ingles = 0;

    //intenta guardar el nuevo usuario en la DB

    user.save(function (err) {
      //usamos el metodo creado para dar mensajes de error
      if (err) {
        var message = getErrorMessage(err);
        //configuramos el mensaje flash
        req.flash('error', message);


        return res.redirect('/error');
      }
      //si el usuario se ha creado corectamente lo loguea
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }

        return res.redirect('/');
      });
    });
  } else {
    res.redirect('/');
  }
};

exports.juego = (req, res, next) => {
  var id = req.user.id;
  var juego = req.body;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { "$push": { "matematicas": juego } }, { "new": true, "upsert": true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send(juego);
  });
}
exports.deleteJuego = (req, res, next) => {
  var id = req.user.id;
  var juego = req.body;
  var idmates = juego._id;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { "$pull": { "matematicas": { _id: idmates } } }, { "new": true, "upsert": true }, function (err, doc) {
    if (err) {
      return next(err);
    }
    return res.send(juego._id);

  });
};

exports.updateJuego = (req, res, next) => {
  var id = req.user.id;
  var juego = req.body;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { "$push": { "matematicas": juego } }, { "new": true, "upsert": true }, function (err, doc) {
    if (err) {
      return next(err);
    } else {
      return next();
    }

  });
};

exports.updatePuntosMates = (req, res, next) => {
  var id = req.user.id;
  var puntos = req.body;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { $set: { "puntuacion": { "matematicas": puntos.puntuacion.matematicas, "ingles": puntos.puntuacion.ingles } } }, { "upsert": true },
    (err, puntos) => {
      if (!err) {
        res.send("it works");
      }
      if (err) {
        return next(err);
      }

    });
}

exports.juegoIngles = (req, res, next) => {
  var id = req.user.id;
  var juego = req.body;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { "$push": { "ingles": juego } }, { "new": true, "upsert": true }, function (err, doc) {
    if (err) {
      return next(err);
    }
    return res.send(juego);
  });
}

exports.deleteJuegoIngles = (req, res, next) => {
  var id = req.user.id;
  var juego = req.body;
  var idIngles = juego._id;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { "$pull": { "ingles": { _id: idIngles } } }, { "new": true, "upsert": true }, function (err, doc) {
    if (err) {
      return next(err);
    }
    return res.send(juego._id);

  });
};

exports.updateJuegoIngles = (req, res, next) => {
  var id = req.user.id;
  var juego = req.body;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { "$push": { "ingles": juego } }, { "new": true, "upsert": true }, function (err, doc) {
    if (err) {
      return next(err);
    } else {
      return next();
    }

  });
};
exports.forgot = (req, res) => {
  async.waterfall([
    function (done) {
      crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function (token, done) {
      
      User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
          req.flash('error', 'No existe ninguna cuenta con este correo!');
          return res.redirect('/forgot');
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000 * 3;

        user.save(function (err) {
          done(err, token, user);
        });
      });
    },
    function (token,user, done) {
      var Transport = mail.createTransport({
       
        host: 'smtp.sendgrid.net',
        port:'587',
        authentication:'plain',
        domain: 'heroku',
        auth: {
          user:  'app69106898@heroku.com',
          pass:'yxpgqprj3652'
        }
      });
      var mailOptions = {
        from: 'gefcoreapp@gmail.com',
        to: req.body.email,
        subject: 'Recuperar contraseña',
        text: `http://${req.headers.host}/reset/${token}`
      };
      Transport.sendMail(mailOptions, function (err) {
        req.flash('info', `Se ha enviado un correo a ${user.email} con las instrucciones para cambiar la contraseña.`);
        done(err);
      });
    }
  ], function (err) {
    if (err) return next(err);
    res.redirect('/forgot');
  });
};
exports.resetPassword = (req, res, send) => {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() + 1 } }, function (err, user) {
    if (!user) {
      req.flash('error', 'Ha pasado el tiempo en el que podias reiniciar tu contraseña!.');
      return res.redirect('/forgot');
    }
    res.render('reset', {
      user: req.user,
      messages: req.flash('error'|| req.flash('info'))
    });
  });
};

exports.resetConfirmation = (req, res, next) => {
  async.waterfall([
    function (done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
        if (!user) {
          req.flash('error', 'La peticion de contraseña ha expirado.');
          return res.redirect('back');
        }

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function (err) {
          done(err, user);
        });
      });
    },
    function ( user, done) {
      var Transport = mail.createTransport({
        
        host: 'smtp.sendgrid.net',
        port:'587',
        authentication:'plain',
        domain: 'heroku',
        auth: {
          user:  'app69106898@heroku.com',
          pass:'yxpgqprj3652'
        }
      });
      var mailOptions = {
        from: 'gefcoreapp@gmail.com',
        to: user.email,
        subject: 'contraseña cambiada',
        text: `Confirmamos que su contraseña ha sido cambiada correctamente.`
      };
      Transport.sendMail(mailOptions, function (err) {
        req.flash('info', `Se ha reiniciado la contraseña para la cuenta ${user.mail}.`);
        done(err);
      });
    }
  ], function (err) {
    res.redirect('/');
  });
};

exports.updatePuntosIngles = (req, res, next) => {
  var id = req.user.id;
  var puntos = req.body;
  var query = { '_id': id };

  User.findOneAndUpdate(query, { $set: { "puntuacion": { "matematicas": puntos.puntuacion.matematicas, "ingles": puntos.puntuacion.ingles } } }, { "upsert": true },
    (err, puntos) => {
      if (!err) {
        res.send("it works");
      }
      else {
        next(err);
      }
    });
};



//metodo singOut
exports.singOut = function (req, res) {
  //metodo log out de passport

  req.logout();

  //redireccionamos a la pagina principal

  res.redirect('/');
};
