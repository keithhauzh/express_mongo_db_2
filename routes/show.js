const express = require("express");
const router = express.Router();

// load the models
const Show = require("../models/show");

// create the routes
// get all the movies pointing to /shows
router.get("/", async (req, res) => {
  const genre = req.query.genre;
  const rating = req.query.rating;
  const premiere_year = req.query.premiere_year;
  // create a containenr for filter
  let filter = {};
  if (genre) {
    filter.genre = genre;
  }
  if (rating) {
    filter.rating = { $gt: rating };
  }
  if (premiere_year) {
    filter.premiere_year = { $gt: premiere_year };
  }

  const shows = await Show.find(filter);
  res.send(shows);
});

// get one show by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const show = await Show.findById(id);
  res.send(show);
});

module.exports = router;
