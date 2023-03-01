'use strict';

const mongoose = require('mongoose');

const SnackSchema = new mongoose.Schema({
  name: {type:String, required:true},
  description: String,
  rating: Number,
});

module.exports = mongoose.model('Snack', SnackSchema);
