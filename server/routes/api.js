//Get dependencies
var Movie = require('../../src/app/models/movie');
const express = require('express');
const router = express.Router();

const axios = require('axios');
var api_key = '177ba2703d1a06d4a9c1666172f35fb5';
const upcomingAPI = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + api_key;

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo connection error'));
db.once('open', function() {
  console.log('Mongo connected...');
});

router.use(function(req, res, next) {
    console.log('Logging...');
    next();
});

router.get('/', function(req, res) {
  res.json({ message: `Movie API be here.` });
});

router.get('/upcoming', (req, res) => {
  axios.get(upcomingAPI)
    .then(upcoming => {
      res.status(200).json(upcoming.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

router.route('/movies')

//GET and list
.get(function(req,res) {
  Movie.find(function(err, movies) {
    if(err)
      res.send(err);
    res.json(movies);
  });
})

//POST / ADD
.post(function(req,res) {
  var movie = new Movie(req.body);

  movie.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Movie Added!'});
  });

});

router.route('/movies/:movie_id')

//GET and list
.get(function(req,res) {
  Movie.findById(req.params.movie_id, function(err, movie) {
    if(err)
      res.send(err);
    res.json(movie);
  });
})

//PUT / UPDATE
.put(function(req,res) {
  Movie.findById(req.params.movie_id, function(err, movie) {
    if (err)
      res.send(err);

    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.year = req.body.year;
    movie.cover = req.body.cover;
    movie.description = req.body.description;
    movie.genre = req.body.genre;
    movie.imdb = req.body.imdb;
    movie.tomatoes = req.body.tomatoes;

    movie.save(function(err) {
      if(err)
        res.send(err);
      res.json({ message: 'Movie Updated!'});
    });
  });
})

//DELETE
.delete(function(req, res) {
  Movie.remove({
      _id: req.params.movie_id
  }, function(err, bear) {
      if (err)
          res.send(err);

      res.json({ message: 'Movie Deleted' });
  });
});

//Redirect any other routes to index.  The route denoted with * must come AFTER all other API routes have been defined.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = router;
