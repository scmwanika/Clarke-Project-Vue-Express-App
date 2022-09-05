const express = require("express");

const Activity = require("../models/activityModel");

// Creating a Router
const router = express.Router();

// NEW ACTIVITY
router.post('/activities/new', async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    await newActivity.save()
      .then(() => res.send('saved'));
  } catch (error) {
    res.send('error');
  }
});

// FIND ALL ACTIVITIES
router.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.send("error");
  }
});

// FIND ACTIVITY BY ID
// Button "edit" onClick GETS this activity.
router.get("/activities/:id", async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.id });
    res.json(activity);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE ACTIVITY
// Button "Update Activity" onClick UPDATES this activity.
router.post("/activities/edit/:id", async (req, res) => {
  try {
    const activity = await Activity.updateOne({ _id: req.body._id }, req.body, { new: true });
    res.send('updated');
  } catch (error) {
    res.send("error");
  }
});

// DELETE ACTIVITY
router.get("/activities/delete/:id", async (req, res) => {
  try {
    const activity = await Activity.deleteOne({ _id: req.params.id });
    res.send('deleted');
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
