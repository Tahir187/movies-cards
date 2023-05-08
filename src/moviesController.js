const moviesService = require('./moviesServices');

const getAllMovies = (req, res) => {
  const movies = moviesService.getMovies();
  res.send(movies);
};

module.exports = {
  getAllMovies,
};
