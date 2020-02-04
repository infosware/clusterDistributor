const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  id: Number,
  name: String,
  email: String,
  division: Number,
});

module.exports = mongoose.model('User', User);