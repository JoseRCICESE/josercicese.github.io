const { Schema, model } = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - secret
 *         - role
 * 
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del Usuario
 *         username:
 *           type: string
 *           description: Nombre del usuario
 *         secret:
 *           type: string
 *           description: Contraseña del usuario
 *         role:
 *           type: string
 *           description: Rol del usuario
 *       example:
 *         username: Juan Perez
 *         secret: verysafepassword
 *         role: USER
 */

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    names: {
        type: String,
        required: true,
        trim: true
    },
    lastNames: {
        type: String,
        required: true,
        trim: true
    },
    secret: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    files: [{ type: Schema.Types.ObjectId, ref: 'patientData' }]
}, {
    timestamps: true
});
module.exports = model('User', userSchema);
