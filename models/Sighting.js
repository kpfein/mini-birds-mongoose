var mongoose = require('mongoose');

var Sighting = mongoose.model('Sighting', new mongoose.Schema ({
  name: {
    type: String,
    lowercase: true
  },
  order: {
    type: String,
    maxlength: 20
  },
  status: {
    type: String,
    lowercase: true,
    enum: [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern',
      'out of stock'
    ]
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  numberSeen: {
    type: Number,
    min: 1
  }
}));

module.exports = Sighting;
