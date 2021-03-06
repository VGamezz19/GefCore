//llamamos a strict de Javascript
'use strict';

//cargamos mongose y el objeto Schema junto a crypto para generar
//nuestra coleccion y encriptar contraseñas

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;


//Definimos nuestro nuevo Schema

var userSchema = new Schema({

    username: {
        type: String, unique: true,
        required: 'Nombre de usuario obligatorio',
        //removemos los espacios en blanco del username
        trim: true
    },
    firstName: String,
    lastName: String,
    email: {
        type: String, required: 'email necesario',
        //validamos que sea de formato email
        match: [/.+\@.+\..+/, 'Escribe un email correcto']
    },
    password: {
        type: String, required: 'necesitas una contraseña', validate: [function (password) {
            return password && password.length > 6;
        }, 'La contraseña debe ser de minimo 7 caracteres'
        ]
    },
    salt: { type: String },
    provider: {
        type: String,
        required: 'Provider obligatorio!'
    },
    providerId: String,
    providerData: {},
    createdAt: {
        type: Date, default: Date.now
    },
    puntuacion: {
        matematicas: Number,
        ingles: Number
    },
    matematicas: [{
        juego: {
            identi: String,
            titulo: String,
            nivel: Number,
            puntuacion: Number,
            estado: Number,
            correctas: Number,
            incorrectas: Number,
            ultimoUso: Date
        }
    }],
    ingles: [{
        juego: {
            identi: String,
            titulo: String,
            nivel: Number,
            puntuacion: Number,
            estado: Number,
            correctas: Number,
            incorrectas: Number,
            ultimoUso: Date
        }
    }],
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    rol: String
});


userSchema.virtual('fullname').get(function () {
    return this.firstName + ' ' +
        this.lastName; this.firstName = splitName[0] ||
            ''; this.lastName = splitName[1] || '';
});

//Usamos el middleware pre-save para el hash de la contraseña
userSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});
//creamos un metodo de instancia para el hashing
userSchema.methods.hashPassword = function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64');
};
//creamos el metodo para autenticar al usuario
userSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};


//creamos el modelo 'User' a traves de nuestro Schema
mongoose.model('User', userSchema);
