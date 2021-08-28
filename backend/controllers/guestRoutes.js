const express = require('express');
const mongoose = require('mongoose');

// Mongoose provides options to work around deprecation warnings
// Make Mongoose use `findOneAndUpdate()`. this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const Guest = require('../models/guestModel');

// Creating a Router
const router = express.Router();

// ADD GUEST TO GUEST'S TABLE
router.post('/guests/add', async (req, res) => {
  try {
    const newGuest = new Guest(req.body);
    await newGuest.save()
      .then(() => res.json('guest Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL GUESTS
router.get('/guests', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND GUEST BY ID
// Edit-button onClick GETs this guest.
router.get('/guest/:id', async (req, res) => {
  try {
    const guest = await Guest.findOne({ _id: req.params.id });
    res.json(guest);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// UPDATE GUEST
// Update-button onClick, POSTs this guest.
router.post('/update-guest/:id', async (req, res, next) => {
  Guest.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    // eslint-disable-next-line consistent-return
  }, (error, data) => {
    if (error) {
      return next(error);
    }
    res.json(data);
  });
});

// DELETE GUEST
router.get('/delete-guest/:id', async (req, res) => {
  try {
    await Guest.deleteOne({ _id: req.params.id });
    res.json('guest Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
