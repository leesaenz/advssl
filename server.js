//Get server dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movies/movies');

//API routing
//Grabbing api.js and Express
const api = require('./server/routes/api');
const app = express();

//Set parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Get a port from ENV
const port = process.env.PORT || '3000';

//Path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set api routes
app.use('/api', api);

//Set that port on Express
app.set('port', port);

//Create an HTTP server that gets passed Express
const server = http.createServer(app);

//Running server on port defined above and console logging a success message
server.listen(port, () => console.log(`API running on http://localhost:${port}`));