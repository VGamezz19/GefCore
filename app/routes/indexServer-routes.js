module.exports =function(app) {
        var index = require('../controllers/indexServer-controller.js');
        app.get('/', index.render);

};
