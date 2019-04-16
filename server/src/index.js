const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose');
const models = require('./models');

// TODO: remove posts
const posts = require('./routes/posts');
const users = require('./routes/users');

mongoose.Promise = global.Promise;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// TODO: remove posts
app.use(posts);
app.use(users);

mongoose.connect(config.dbURL, config.dbOptions);

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`);
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`));
  })
  .on('error', error => console.warn(error));


passport.use(new LocalStrategy((username, password, done) => {
    return models.User.findOne({email: username})
      .then((user) => {
        if (user.password === password) {
          done(null, user);
          return
        }
        done(null, false);
    });
}));

app.post('/login', passport.authenticate('local', { session: false }),
    (req, res) => {
        res.send({
            token: req.user,
        });
    },
);