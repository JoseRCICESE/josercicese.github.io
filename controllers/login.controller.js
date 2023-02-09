const { log } = require('debug');

const loginCtrl = {},
      bcrypt = require('bcryptjs'),
      jwt = require('../config/jwt'),
      User = require('../models/User')


/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia el proceso de autenticación de un usuario y genera el token de sesión
 *     tags: [Usuarios]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Autenticación
 *         content:
 *           application/json:
 *             schema:
 *               type: Object
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

loginCtrl.login = async (req, res) =>  {
const { username, secret } = req.body;
console.log(username);
User.findOne({
    'username': username
    }, (err, usuarioDb) => {
    console.log(usuarioDb);
    if (err) {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error al buscar usuarios',
            errors: err

        });
    }
    if (!usuarioDb) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Credenciales incorrectas - usuario',
            errors: {message: 'No existe un usuario con ese ID'}
        });
    }

    //if (!bcrypt.compareSync(secret, usuarioDb.secret)) {
    if (secret != usuarioDb.secret) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Credenciales incorrectas - password',
            errors: {message: 'No existe un usuario con ese ID'}
        });
    }

    //Crear un token!!!
    usuarioDb.secret = 'No te wa decí';
    if (req.params.gettoken){ // gettoken es un parametro (true/false) que si está a true indica que queremos el token
        // generar y devolver token
        return res.status(200).send({});

    } else {
        // devolver datos de usuario
        usuarioDb.secret = undefined;
        return res.status(200).send({usuarioDb, token: jwt.createToken(usuarioDb)});
    }
   })
}

module.exports = loginCtrl;