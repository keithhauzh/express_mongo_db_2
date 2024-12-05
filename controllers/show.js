// load the models
const Show = require("../models/show");

const getShows = async (genre, rating, premiere_year) => {
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
  return shows;
};

const getShow = async (id) => {
  const show = await Show.findById(id);
  return show;
};

const addNewShow = async (
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  const newShow = new Show({
    title,
    creator,
    premiere_year,
    end_year,
    seasons,
    genre,
    rating,
  });
  // sae the new show into mongodb
  await newShow.save();
  return newShow;
};

const updateShow = async (
  id,
  title,
  creator,
  premiere_year,
  end_year,
  seasons,
  genre,
  rating
) => {
  const updatedShow = await Show.findByIdAndUpdate(
    id,
    { title, creator, premiere_year, end_year, seasons, genre, rating },
    { new: true }
  );
  return updatedShow;
};

const deleteShow = async (id) => {
  return await Show.findByIdAndDelete(id);
};

module.exports = {
  getShows,
  getShow,
  addNewShow,
  updateShow,
  deleteShow,
};
