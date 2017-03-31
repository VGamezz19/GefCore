var Users = require('../../model/users.js');


var user = {
  read: function(req, res, next) {
  res.json({type: 'Read', id: req.params.id});
},

create: function(req, res, next){
  res.send(req.body);
},

update: function(req, res, next){
  res.json({type: 'Update', id: req.params.id, body: req.body});
},
delete: function(req, res, next){
  res.json({type:'Delete', req.params.id});
},

getAll: function(req, res, next){
  Users.find(function(err, data){
    if(err) {
      console.error;
    }
    else{
      res.json(data);
    }
  });
}

}


module.exports = Users;
