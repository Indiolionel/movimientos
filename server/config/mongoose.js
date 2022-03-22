const mongoose = require('mongoose');
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dburi = process.env.DB_URI;

const finalUri = !dbuser && !dbpassword
  ? `mongodb://${dburi}`
  : `mongodb://${dbuser}:${dbpassword}@${dburi}`;

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// Connect to mongo db
exports.connect = async () => {
  await mongoose.connect(finalUri, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
};
