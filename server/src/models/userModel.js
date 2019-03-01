const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // email: {
  //   type: String,
  //   required: true,
  //   trim: true,
  //   unique: true,
  //   default: null
  // },
  // password: {
  //   type: String,
  //   required: true
  // },
  // isAdmin: Boolean,
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  selfRating: {
    type: Number,
  }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;