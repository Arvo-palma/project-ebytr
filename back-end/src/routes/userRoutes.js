const express = require('express');
const userController = require('../controllers/userController');

const userRoutes = express.Router();

userRoutes.get('/tasks/:id', userController.getAllTasks);
userRoutes.post('/newtask', userController.createTask);
userRoutes.put('/task/:id', userController.updateTask);
userRoutes.delete('/task/:id', userController.deleteTask);

module.exports = userRoutes;
