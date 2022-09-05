const express = require("express");

const Review = require("../models/reviewModel");

// Creating a Router
const router = express.Router();

// NEW REVIEW
router.post('/reviews/new', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save()
      .then(() => res.send('saved'));
  } catch (error) {
    res.send('error');
  }
});

// FIND ALL REVIEWS
router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find({rating: "☆☆☆"});
    res.json(reviews);
  } catch (error) {
    res.send("error");
  }
});

// FIND REVIEW BY ID
// Button "edit" onClick GETS this review.
router.get("/reviews/:id", async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    res.json(review);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE REVIEW
// Button "Update Review" onClick UPDATES this review.
router.post("/reviews/edit/:id", async (req, res) => {
  try {
    const review = await Review.updateOne({ _id: req.body._id }, req.body, { new: true });
    res.send('updated');
  } catch (error) {
    res.send("error");
  }
});

// DELETE REVIEW
router.get("/reviews/delete/:id", async (req, res) => {
  try {
    const review = await Review.deleteOne({ _id: req.params.id });
    res.send('deleted');
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
