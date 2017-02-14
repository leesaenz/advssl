//Get dependencies
const express = require('express');
const router = express.Router();
var Movie     = require('../../models/movie');

router.use(function(req, res, next) {
    console.log('Logging...');
    next();
});

router.get('/', function(req, res) {
  res.json({ message: `API: Access Granted!` });
});

router.route('/movies')

  .post(function(req,res) {

    var movie = new Movie();

    movie.title = req.body.title;
    movie.director = req.body.director;
    movie.year = req.body.year;
    movie.cover = req.body.cover;
    movie.description = req.body.description;
    movie.imdb = req.body.imdb;
    movie.tomatoes = req.body.tomatoes;

    movie.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: `Movie Created!` });
    });

  })

  .get(function(req,res) {
    Movie.find(function(err, movies) {
      if(err)
        res.send(err);
      res.json(movies);
    });
  });

//Redirect any other routes to index.  The route denoted with * must come AFTER all other API routes have been defined.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = router;
