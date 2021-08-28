const mongoose = require('mongoose');

const { Schema } = mongoose;

const guestSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  guestNum: {
    type: String,
  },
  accommodationType: {
    type: String,
  },
  checkin: {
    type: String,
  },
  checkout: {
    type: String,
  },
}, {
  collection: 'guests',
});

module.exports = mongoose.model('Guest', guestSchema);
