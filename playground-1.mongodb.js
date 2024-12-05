use("netflix");

db.createCollection("movies");

db.movies.insertMany([
  {
    title: "Ocean's Twelve",
    director: "Steven Soderbergh",
    release_year: 2004,
    genre: "Heist",
    rating: 6.5,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    release_year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    release_year: 2014,
    genre: "Comedy",
    rating: 8.1,
  },
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    release_year: 2017,
    genre: "Sci-Fi",
    rating: 8.0,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    release_year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
  },
  {
    title: "Mad Max: Fury Road",
    director: "George Miller",
    release_year: 2015,
    genre: "Action",
    rating: 8.1,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    release_year: 2008,
    genre: "Action",
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    release_year: 1994,
    genre: "Crime",
    rating: 8.9,
  },
  {
    title: "The Shape of Water",
    director: "Guillermo del Toro",
    release_year: 2017,
    genre: "Drama",
    rating: 7.3,
  },
  {
    title: "Dunkirk",
    director: "Christopher Nolan",
    release_year: 2017,
    genre: "War",
    rating: 7.9,
  },
]);
