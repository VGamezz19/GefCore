'use strict';

var ingles = require('../controllers/inglesServer-controller');

module.exports = (app) => {


  app.route('/getAllIngles')
     .get(ingles.getAll);

  app.route('/getIdIngles')
     .get(ingles.getId);
}
