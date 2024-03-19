const Trip = require("../models/tripModel");

const createTrip = async (req, res) => {
  try {
    const { tripName, tripCountry, tripCity } = req.body;

    const newTrip = new Trip({
      tripName,
      tripCountry,
      tripCity,
    });
    const saved_new_trip = await newTrip.save();
    res
      .status(200)
      .json({ message: "Trip created successfully", saved_new_trip });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const tripDetails = async (req, res) => {
  try {
    const details = await Trip.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const detailsUpdateOfTrip = await Trip.findByIdAndUpdate(id,{
      $set:req.body,
      new:true
    });
    res
      .status(200)
      .json(
        { message: "Trip details updated successfully" ,
        detailsUpdateOfTrip}
      );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTripData = await Trip.findByIdAndDelete(id);
    res
      .status(200)
      .json({ messge: "Trip data has been deleted", deleteTripData});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTrip,
  tripDetails,
  updateDetails,
  deleteTrip,
};
