const express = require("express");

const Accommodation = require("../models/accommodationModel");

// Creating a Router
const router = express.Router();

// ADD ACCOMMODATION TO ACCOMMODATION'S TABLE
router.post('/accommodations/new', async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    await newAccommodation.save()
      .then(() => res.json(newAccommodation));
  } catch (error) {
    res.send('error');
  }
});

// FIND ALL ACCOMMODATION
router.get("/accommodations", async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.send("error");
  }
});

// FIND ACCOMMODATION BY ID
// edit-button onClick GETs this accommodation.
router.get("/accommodations/:id", async (req, res) => {
  try {
    const accommodation = await Accommodation.findOne({ _id: req.params.id });
    res.json(accommodation);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE ACCOMMODATION
// update-button onClick POSTs this accommodation.
router.post("/accommodations/edit", async (req, res) => {
  try {
    await Accommodation.updateOne({ _id: req.body._id }, req.body, { new: true });
  } catch (error) {
    res.send("error");
  }
});

// DELETE ACCOMMODATION
router.get("/accommodations/delete/:id", async (req, res) => {
  try {
    const accommodation = await Accommodation.deleteOne({ _id: req.params.id });
    res.json(accommodation);
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
