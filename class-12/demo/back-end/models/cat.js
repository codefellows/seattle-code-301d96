const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
  name: {type: String, required: true}, // stretch to make property required
  color: String,
  hasClaws: Boolean,
  location: String,
});

module.exports = mongoose.model('Cat', catSchema);
