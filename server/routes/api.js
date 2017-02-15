//Get dependencies
var Movie = require('../../models/movie');
const express = require('express');
const router = express.Router();

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
  res.json({ message: `Movie API: Access Granted!` });
});

router.route('/movies')

.get(function(req,res) {
  Movie.find(function(err, movies) {
    if(err)
      res.send(err);
    res.json(movies);
    console.log(req.body);
  });
})

.post(function(req,res) {
  var movie = new Movie(req.body);

  movie.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Movie Added!'});
  });

});

//Redirect any other routes to index.  The route denoted with * must come AFTER all other API routes have been defined.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = router;
