const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({
  fileName: {
    type: String,
  },
  description: {
    type: String,
  },
}, {
  collection: 'activities',
});

module.exports = mongoose.model('Activity', activitySchema);
