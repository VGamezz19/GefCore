var mongoose = require('mongoose');

var schema = {
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
}

var Users =  mongoose.model('users', schema);

module.exports = Users;
