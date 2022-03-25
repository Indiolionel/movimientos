require('dotenv/config')
const express = require('express');
const mongoose = require('./config/mongoose');
const bodyParser = require('body-parser');
const logger = require('./logger');
const port = process.env.PORT || 3000;
const cors = require('cors');
const app = express();

const movementRoute = require('./routes/movements')

app.use(bodyParser.json());
app.use(cors())
app.use('/api/movements', movementRoute);

// open mongoose connection
mongoose.connect();

app.listen(port, () => logger.log('info', `API running on port ${port}`));