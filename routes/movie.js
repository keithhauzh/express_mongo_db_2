const express = require("express");
//create a router for movies
const router = express.Router();

// import functions from controller
const {
  getMovies,
  getMovie,
  addNewMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie");

// create the routes

// get all the movies. Pointing to /movies
router.get("/", async (req, res) => {
  try {
    const genre = req.query.genre;
    const rating = req.query.rating;
    const director = req.query.director;
    // use the getMovies from the controller to laod t
    const movies = await getMovies(genre, rating, director);
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// get one movie by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await getMovie(id);
    res.send(movie);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// add movie
router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const director = req.body.director;
    const release_year = req.body.release_year;
    const genre = req.body.genre;
    const rating = req.body.rating;

    // check for error
    if (!title || !director || !release_year || !genre || !rating) {
      return res.status(400).send({ error: "Required data is missing" });
    }

    // pass in all the data to addNewMovie function
    const newMovie = await addNewMovie(
      title,
      director,
      release_year,
      genre,
      rating
    );
    res.status(200).send(newMovie);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
  // retrieve the data from req.body
});

// update movie
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const director = req.body.director;
    const release_year = req.body.release_year;
    const genre = req.body.genre;
    const rating = req.body.rating;
    // pass in the data into the updateMovie function
    const updatedMovie = await updateMovie(
      id,
      title,
      director,
      release_year,
      genre,
      rating
    );
    res.status(200).send(updatedMovie);
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

// delete movie
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // trigger the deleteMovie function
    await deleteMovie(id);
    res.status(200).send({
      message: `Movie with the provided id #${id} has been deleted`,
    });
  } catch (error) {
    res.status(400).send({
      error: error._message,
    });
  }
});

module.exports = router;
