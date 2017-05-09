'use strict';

var mates = require('../controllers/matesServer-controller');

module.exports = (app) => {


  app.route('/getAllMates')
     .get(mates.getAll);

  app.route('/getIdMates')
     .get(mates.getId);

  app.route('/preguntasMates')
     .get(mates.getPreguntas);
}
