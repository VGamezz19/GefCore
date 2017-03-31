var mongoose = require('mongoose'),
    dbName = 'gefcore';

var User = mongoose.model('user', {
          username: {type: String, required: true},
          email: {type: String, required: true},
          password: {type: String, required: true}

});

mongoose.connect('mongodb://localhost/' + dbName);


var db = mongoose.connection;
db.on('error', console.error);
db.once('open', deleteUser);


function deleteUser() {
  User.remove({}, function(err){
        if(err) console.log(err);
        insertUser()
  });
}


function insertUser(){
      var newUser = new User( {
        username: "Alex",
        email: "alex@alex.com",
        password: "123456"
      });

      newUser.save(function(err){
        if(err) console.error;

      });
}
