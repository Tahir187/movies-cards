
const express = require('express');
const moviesController = require('./moviesController');

const router = express.Router();

router.get('/movies', moviesController.getAllMovies);

module.exports = router;
