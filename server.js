//Get server dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const api = require('./server/routes/api');

//Set parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api', api);

//Get a port from ENV
const port = process.env.PORT || '3000';

//Path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//Set that port on Express
app.set('port', port);

//Create an HTTP server that gets passed Express
const server = http.createServer(app);

//Running server on port defined above and console logging a success message
server.listen(port, () => console.log(`Express API running on http://localhost:${port}`));