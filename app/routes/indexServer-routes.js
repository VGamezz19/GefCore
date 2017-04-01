
//configuramos el enrutamiento de express hacia la aplicacion
module.exports =function(app) {
        var index = require('../controllers/indexServer-controller.js');
        app.get('/', index.render);

};
