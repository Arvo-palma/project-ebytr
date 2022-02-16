const express = require('express');
const adminController = require('../controllers/adminController');

const adminRoutes = express.Router();

adminRoutes.get('/users', userController.getAllUsers);
adminRoutes.post('/newuser', userController.createUser);
adminRoutes.put('/user/:id', userController.updateUser);
adminRoutes.delete('/user/:id', userController.deleteUser);

module.exports = adminRoutes;
