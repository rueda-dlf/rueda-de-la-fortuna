const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dictionarySchema = new Schema({
  words: {
    type: Map,
    of: {
      translations: [String]
    }
  }
});

const Dictionary = mongoose.model('Dictionary', dictionarySchema);

module.exports = Dictionary;