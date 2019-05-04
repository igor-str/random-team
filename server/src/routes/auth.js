const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const passport = require('passport');

router.post('/register', (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });

  user.save((err, data) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send('User is not created!');
    } else {
      res.send({
        success: true,
        message: `User with ID_${data._id} saved successfully!`,
      })
    }
  });
});

router.post('/login', passport.authenticate('local', {session: false}),
  (req, res) => {
    res.send({
      user: req.user,
    });
  },
);

router.get('/logout', (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy(() => {
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

module.exports = router;