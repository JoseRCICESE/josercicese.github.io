const usersCtrl = {};
const User = require('../models/User');
const mongoose = require('mongoose');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Devuelve la lista de todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find().populate('files');
    res.json(users);
}

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Devuelve un usuario dado su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Descripción del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuario no se pudo encontrar
 */

 usersCtrl.getUser = async (req, res) => {
    console.log(req.params.id);
    const id = new mongoose.Types.ObjectId(req.params.id);
    const user = await User.findById(id).populate('files').
    exec(function (err, user) {
      if (err) console.log(err);
      console.log(user);
      res.json(user);
    });
    
};

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: El usuario ha sido creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Petición incorrecta
 *       500:
 *         description: Error interno del servidor
 
 */

usersCtrl.createUser = async (req, res) => {
    try {
        const { username, names, lastNames, secret, role, balance, files } = req.body;
        const newUser = new User({username, names, lastNames, secret, role, balance, files});
        console.log(newUser);
        await newUser.save();
        res.json({message: 'User created', newUser});
    } catch (error) {
        res.json(error);
    }
}

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    summary: Actualiza el usuario dado su ID
 *    tags: [Usuarios]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: El usuario ha sido actualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Petición incorrecta
 *      404:
 *        description: No se puedo encontrar el usuario
 *      500:
 *        description: Error interno del servidor
 */

 usersCtrl.updateUser = async (req, res) => {
    try {
        const { username, names, lastNames, secret, role, balance, files } = req.body;
        await User.findOneAndUpdate({_id: req.params.id}, {
        username: username,
        names: names, 
        lastNames: lastNames,
        secret: secret,
        role: role,
        balance: balance,
        files: files
        });
        console.log(req.params.id, req.body);
        res.json({message: 'User Updated'});
    } catch (error) {
        res.json(error);
    }
};

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Elimina un usuario dado su ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 * 
 *     responses:
 *       200:
 *         description: El usuario fue eliminado
 *       404:
 *         description: No se pudo encontrar el usuario
 */

usersCtrl.deleteUser = async (req, res) => {
    /*const reports = await Report.find().populate('author');
    await reports.forEach(element => {
        if (element.author._id == req.params.id) {
            console.log(element._id.toString());
            Report.findByIdAndDelete(element._id.toString());
        }
    });*/
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({message: 'User Deleted'})
    } catch (error) {
        res.json(error);
    }
}
module.exports = usersCtrl;
