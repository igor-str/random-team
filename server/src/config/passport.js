const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

passport.use(new LocalStrategy((username, password, done) => {
  return models.User.findOne({email: username})
    .then((user) => {
      if (user.password === password) {
        done(null, user);
        return
      }
      done(null, false);
    }).catch((err) => {
      done(null, false);
    });
}));

module.exports = passport;