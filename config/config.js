//esta exportación nos hara ejecutar el entorno que estamos usando actualmente
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
