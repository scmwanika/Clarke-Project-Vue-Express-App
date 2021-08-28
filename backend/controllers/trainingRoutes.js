const express = require('express');

const Training = require('../models/trainingModel');

// Creating a Router
const router = express.Router();

// ADD TRAINING TO TRAININGS TABLE
router.post('/trainings/add', async (req, res) => {
  try {
    const newTraining = new Training(req.body);
    await newTraining.save()
      .then(() => res.json('Training Added'));
  } catch (error) {
    console.error(error);
    res.json('Unsuccessful! Please Try Again');
  }
});

// FIND ALL TRAININGS
router.get('/trainings', async (req, res) => {
  try {
    const trainings = await Training.find();
    res.json(trainings);
  } catch (error) {
    res.status(400).send('Unable to find records');
  }
});

// FIND TRAINING BY ID
router.get('/trainings/:id', async (req, res) => {
  try {
    const training = await Training.findOne({ _id: req.params.id });
    res.json(training);
  } catch (error) {
    res.status(400).send('Unable to find the record in the list');
  }
});

// DELETE TRAINING
router.get('/delete-training/:id', async (req, res) => {
  try {
    await Training.deleteOne({ _id: req.params.id });
    res.json('Training Deleted');
  } catch (error) {
    res.status(400).send('Unable to delete the record from the database');
  }
});

//
module.exports = router;
