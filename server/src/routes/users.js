const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/users', (req, res) => {
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
    } else {
      res.send({
        success: true,
        message: `User with ID_${data._id} saved successfully!`,
      })
    }
  });
});

router.get('/users', (req, res) => {
  User.find({}, 'name selfRating', (err, users) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send({ users: users });
    }
  }).sort({ _id: -1 });
});

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id, 'name selfRating', (err, user) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(user);
    }
  });
});

router.put('/users/:id', (req, res) => {
  User.findById(req.params.id, 'name selfRating', (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (req.body.name) {
        user.name = req.body.name;
      }
      if (req.body.selfRating) {
        user.selfRating = req.body.selfRating;
      }

      user.save(err => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
});

router.delete('/users/:id', (req, res) => {
  User.remove({_id: req.params.id}, err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;