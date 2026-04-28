const express = require('express');
const UserController = require('../controllers/UserController.js');
const UserRoutes = express.Router();

// Logica
UserRoutes.get('/usuarios', UserController.findAll);
UserRoutes.get('/usuarios/:id', UserController.findById);
UserRoutes.post('/usuarios', UserController.create);
UserRoutes.put('/usuarios/:id', UserController.update);
UserRoutes.delete('/usuarios/:id', UserController.delete);

module.exports = UserRoutes;