const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  english: {
    type: String,
    required: true,
  },
  spanish: {
    type: String,
    required: true,
  },
  spanishWithout: {
    type: String,
    required: true,
  },
});

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = mongoose.model('word', wordSchema);