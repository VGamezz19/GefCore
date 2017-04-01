//llamamos a strict de Javascript
'use strict';

//cargamos mongose y el objeto Schema para generar nuestra coleccion

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


    //Definimos nuestro nuevo Schema

var userSchema = new Schema({

    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    email : {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: false}
});

//creamos el modelo 'User' a traves de nuestro Schema
mongoose.model('User', userSchema);
