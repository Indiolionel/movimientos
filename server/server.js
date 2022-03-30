require('dotenv/config')
const express = require('express');
const mongoose = require('./config/mongoose');
const bodyParser = require('body-parser');
const logger = require('./logger');
const port = process.env.PORT || 3000;
const cors = require('cors');
const app = express();

const movementsRoute = require('./routes/movements')
const usersRoute = require('./routes/users')

// open mongoose connection
mongoose.connect();

// Middlewares
app.use(bodyParser.json());
app.use(cors())

// Movements api
app.use('/api/movements', movementsRoute);

// Users api
app.use('/api/users', usersRoute);


app.listen(port, () => logger.log('info', `API running on port ${port}`));