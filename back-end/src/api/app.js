const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const { userRoutes, adminRoutes } = require('../routes');

app.use(bodyParser.json());

app.use(cors());

app.use(userRoutes);
app.use(adminRoutes);

module.exports = app;
