'use strict';

Schema = mongoose.Schema;

const schemas = {


  userSchema: new Schema({

        username: {type:string},
        password: {type:string},
        email: {type:string},
  })
};

module.exports = schemas;
