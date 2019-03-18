const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

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

module.exports = router;