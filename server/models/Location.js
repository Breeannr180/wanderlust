const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  savedFeatures: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Feature',
    },
  ],
});

const Location = model('Location', locationSchema);

module.exports = Location;
