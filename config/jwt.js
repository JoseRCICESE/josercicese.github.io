'use strict';

/* Servicio que nos va a permitir implementar el uso de TOKENS */

const  jwt = require('jwt-simple'),
       moment = require('moment'),
       SEED = require('./config').SEED;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del Usuario
 *         username:
 *           type: string
 *           description: Nombre del usuario
 *         rol:
 *           type: string
 *           descripción: Rol del usuario ya sea ADMIN y USER
 *         iat:
 *           type: Object
 *           descripción: Fecha de creación del token
 *         exp:
 *           type: Object
 *           descripción: Fecha de expiración del token
 *       example:
 *         username: Juan Perez
 *         rol: ADMIN
 */

exports.createToken = function(user){
    var payload = {
        sub           : user._id,
        name          : user.username,
        privateKey    : user.privateKey,
        iat: moment().unix(), // fecha de creación del token
        exp: moment().add(1, 'day').unix() // fecha de expiración
    };

    return jwt.encode(payload, SEED); // esto genera un hash
};

exports.decodeToken = function (token, SEED) {
    return jwt.decode(token,SEED);
};