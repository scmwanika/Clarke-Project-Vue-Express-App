const express = require("express");

const Guest = require("../models/guestModel");

// Creating a Router
const router = express.Router();

// ADD GUEST TO GUEST'S TABLE
router.post('/guests/new', async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    await newGuest.save()
      .then(() => res.json(newGuest));
  } catch (error) {
    res.send('error');
  }
});

// FIND ALL GUESTS
router.get("/guests", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.send("error");
  }
});

// FIND GUEST BY ID
// edit-button onClick GETs this guest.
router.get("/guests/:id", async (req, res) => {
  try {
    const guest = await Guest.findOne({ _id: req.params.id });
    res.json(guest);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE GUEST
// update-button onClick POSTs this guest.
router.post("/guests/edit", async (req, res) => {
  try {
    await Guest.updateOne({ _id: req.body._id }, req.body, { new: true });
  } catch (error) {
    res.send("error");
  }
});

// DELETE GUEST
router.get("/guests/delete/:id", async (req, res) => {
  try {
    const guest = await Guest.deleteOne({ _id: req.params.id });
    res.json(guest);
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
