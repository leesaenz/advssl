//Get server dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const api = require('./server/routes/api');

app.set('views', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//Set parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/api', api);

//Get a port from ENV
const port = process.env.PORT || '3000';



//Path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'src/index')));
app.use('/images', express.static(path.join(__dirname, 'src/images')));
app.use('/css', express.static(path.join(__dirname, 'src/css')));

//Set that port on Express
app.set('port', port);

app.get('*', function(req, res){
  res.render('index.html');
});

//Create an HTTP server that gets passed Express
const server = http.createServer(app);

//Running server on port defined above and console logging a success message
server.listen(port, () => console.log(`Express API running on http://localhost:${port}`));