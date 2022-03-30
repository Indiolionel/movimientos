require('dotenv/config')
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/mongoose');
const bodyParser = require('body-parser');
const logger = require('./logger');
const port = process.env.PORT || 3000;

const app = express();

const movementRoute = require('./routes/movements')

app.use(cors());
app.use(bodyParser.json());
app.use('/api/movements', movementRoute);

// open mongoose connection
mongoose.connect();

app.listen(port, () => logger.log('info', `API running on port ${port}`));