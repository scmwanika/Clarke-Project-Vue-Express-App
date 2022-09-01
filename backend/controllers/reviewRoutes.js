const express = require("express");

const Review = require("../models/reviewModel");

// Creating a Router
const router = express.Router();

// ADD REVIEW TO REVIEW'S TABLE
router.post('/reviews/new', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save()
      .then(() => res.json(newReview));
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
// edit-button onClick GETs this review.
router.get("/reviews/:id", async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id });
    res.json(review);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE REVIEW
// update-button onClick POSTs this review.
router.post("/reviews/edit", async (req, res) => {
  try {
    await Review.updateOne({ _id: req.body._id }, req.body, { new: true });
  } catch (error) {
    res.send("error");
  }
});

// DELETE REVIEW
router.get("/reviews/delete/:id", async (req, res) => {
  try {
    const review = await Review.deleteOne({ _id: req.params.id });
    res.json(review);
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
