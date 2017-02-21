//Creates Movie Model Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title       : String,
  director    : String,
  year        : Number,
  cover       : String,
  description : String,
  imdb        : Number,
  tomatoes    : Number,
  genre       : String
});

module.exports = mongoose.model('Movie', movieSchema);