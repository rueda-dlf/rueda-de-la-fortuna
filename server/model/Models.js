const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// the schema formatting that duolingo provides
const dictionarySchema = new Schema({
  word: {
    type: String,
    required: true,
    unique: true
  },
  translations: [{
    type: String,
    required: true
  }]
});

const Dictionary = mongoose.model('dictionary', dictionarySchema);

module.exports = Dictionary;

//the schema formatting that we want

const translationSchema = new Schema({
  spanishWord: {
    type: String,
    required: true,
    unique: true
  },
  englishWord: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('translation', translationSchema);
