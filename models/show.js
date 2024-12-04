//schema for shows collection
const { Schema, model } = require("mongoose");

// setup the scheme
const showSchema = new Schema({
  title: String,
  creator: String,
  premiere_year: Number,
  endyear: Number,
  seasons: Number,
  genre: String,
  rating: Number,
});

const Show = model("Show", showSchema);

module.exports = Show; // equal to "export default Show" in React
