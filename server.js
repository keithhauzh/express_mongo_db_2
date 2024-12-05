








// import express
const express = require("express");
const mongoose = require("mongoose");

// create the express app
const app = express();

// middleware to handle JSON request
app.use(express.json());

// connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/netflix")
  .then(() => {
    // if mongodb is successfully connected
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// root route
app.get("/", (req, res) => {
  res.send("Happy coding!");
});

// import all the routes
const movieRouter = require("./routes/movie");
const showRouter = require("./routes/show");

app.use("/movies", movieRouter);
app.use("/shows", showRouter);

// start the server
app.listen(5555, () => {
  console.log("Server is running at http://localhost:5555");
});
