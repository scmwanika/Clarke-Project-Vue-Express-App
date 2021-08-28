const mongoose = require('mongoose');

const { Schema } = mongoose;

const trainingSchema = new Schema({
  fileName: {
    type: String,
  },
  description: {
    type: String,
  },
}, {
  collection: 'trainings',
});

module.exports = mongoose.model('Training', trainingSchema);
