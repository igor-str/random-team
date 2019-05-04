const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');

const users = require('./routes/users');
const auth = require('./routes/auth');
const passport = require('./config/passport'); // not delete this

mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(users);
app.use(auth);

mongoose.connect(config.dbURL, config.dbOptions);

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`);
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`));
  })
  .on('error', error => console.warn(error));
