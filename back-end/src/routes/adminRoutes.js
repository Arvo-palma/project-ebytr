const express = require('express');
const adminController = require('../controllers/adminController');

const adminRoutes = express.Router();

adminRoutes.get('/users', adminController.getAllUsers);
adminRoutes.post('/newuser', adminController.createUser);
adminRoutes.put('/user/:id', adminController.updateUser);
adminRoutes.delete('/user/:id', adminController.deleteUser);

module.exports = adminRoutes;
