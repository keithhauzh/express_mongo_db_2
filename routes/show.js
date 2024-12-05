const express = require("express");
const router = express.Router();

// import functions from controller
const {
  getShows,
  getShow,
  addNewShow,
  updateShow,
  deleteShow,
} = require("../controllers/show");

// create the routes
// get all the movies pointing to /shows
router.get("/", async (req, res) => {
  try {
    const genre = req.query.genre;
    const rating = req.query.rating;
    const premiere_year = req.query.premiere_year;
    const shows = await getShows(genre, rating, premiere_year);
    res.status(200).send(shows);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// get one show by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const show = await getShow(id);
    res.send(show);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// add show
router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;

    // check for error
    if (
      !title ||
      !creator ||
      !premiere_year ||
      !end_year ||
      !seasons ||
      !genre ||
      !rating
    ) {
      return res.status(400).send({ error: "Required data is missing" });
    }

    const newShow = await addNewShow(
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(newShow);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// update movie
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const creator = req.body.creator;
    const premiere_year = req.body.premiere_year;
    const end_year = req.body.end_year;
    const seasons = req.body.seasons;
    const genre = req.body.genre;
    const rating = req.body.rating;

    // pass in the data into the updateShow function
    const updatedShow = await updateShow(
      id,
      title,
      creator,
      premiere_year,
      end_year,
      seasons,
      genre,
      rating
    );
    res.status(200).send(updatedShow);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

//delete the show
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteShow(id);
    res.status(200).send({
      message: `Show with the provided id #${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

module.exports = router;
