const mongoose = require('mongoose')

const tripSchema = mongoose.Schema(
  {
    tripName: {
      type: String,
      required: true,
    },
    tripCountry: {
      type: String,
      required: true,
    },
    tripCity: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema)

module.exports = Trip