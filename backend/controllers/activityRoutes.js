const express = require("express");

const Activity = require("../models/activityModel");

// Creating a Router
const router = express.Router();

// ADD ACTIVITY TO ACTIVITY'S TABLE
router.post('/activities/new', async (req, res) => {
  try {
    const newActivity = new Activity(req.body);
    await newActivity.save()
      .then(() => res.json(newActivity));
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
// edit-button onClick GETs this activity.
router.get("/activities/:id", async (req, res) => {
  try {
    const activity = await Activity.findOne({ _id: req.params.id });
    res.json(activity);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE ACTIVITY
// update-button onClick POSTs this activity.
router.post("/activities/edit", async (req, res) => {
  try {
    await Activity.updateOne({ _id: req.body._id }, req.body, { new: true });
  } catch (error) {
    res.send("error");
  }
});

// DELETE ACTIVITY
router.get("/activities/delete/:id", async (req, res) => {
  try {
    const activity = await Activity.deleteOne({ _id: req.params.id });
    res.json(activity);
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
