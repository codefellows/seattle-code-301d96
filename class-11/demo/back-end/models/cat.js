const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
  location: String,
});

module.exports = mongoose.model('Cat', catSchema);
