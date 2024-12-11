const Movie = require("../models/movie");
const Show = require("../models/show");

const getGenres = async () => {
  // get all the movies
  const movies = await Movie.find();
  // get all the tv shows
  const shows = await Show.find();
  let genres = [];

  movies.forEach((movie) => {
    if (!genres.includes(movie.genre)) {
      genres.push(movie.genre);
    }
  });

  shows.forEach((show) => {
    if (!genres.includes(show.genre)) {
      genres.push(show.genre);
    }
  });

  return genres;
};

module.exports = {
  getGenres,
};
