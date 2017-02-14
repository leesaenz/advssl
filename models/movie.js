//Creates Movie Model Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title       : String,
  director    : String,
  year        : Number,
  cover       : String,
  description : String,
  imdb        : Number,
  tomatoes    : Number
});

module.exports = mongoose.model('Movie', MovieSchema);