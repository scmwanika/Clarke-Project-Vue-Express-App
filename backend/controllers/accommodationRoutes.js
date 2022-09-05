const express = require("express");

const Accommodation = require("../models/accommodationModel");

// Creating a Router
const router = express.Router();

// NEW ACCOMMODATION
router.post('/accommodations/new', async (req, res) => {
  try {
    const newAccommodation = new Accommodation(req.body);
    await newAccommodation.save()
      .then(() => res.send('saved'));
  } catch (error) {
    res.send('error');
  }
});

// FIND ALL ACCOMMODATIONS
router.get("/accommodations", async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.json(accommodations);
  } catch (error) {
    res.send("error");
  }
});

// FIND ACCOMMODATION BY ID
// Button "edit" onClick GETS this accommodation.
router.get("/accommodations/:id", async (req, res) => {
  try {
    const accommodation = await Accommodation.findOne({ _id: req.params.id });
    res.json(accommodation);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE ACCOMMODATION
// Button "Update Accommodation" onClick UPDATES this accommodation.
router.post("/accommodations/edit/:id", async (req, res) => {
  try {
    const accommodation = await Accommodations.updateOne({ _id: req.body._id }, req.body, { new: true });
    res.send('updated');
  } catch (error) {
    res.send("error");
  }
});

// DELETE ACCOMMODATION
router.get("/accommodations/delete/:id", async (req, res) => {
  try {
    const accommodation = await Accommodation.deleteOne({ _id: req.params.id });
    res.send('deleted');
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
