//schema for shows collection
const { Schema, model } = require("mongoose");

// setup the scheme
const showSchema = new Schema({
  title: { type: String, required: true },
  creator: { type: String, required: true },
  premiere_year: { type: Number, required: true },
  end_year: { type: Number, required: true },
  seasons: { type: Number, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Show = model("Show", showSchema);

module.exports = Show; // equal to "export default Show" in React
