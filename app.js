// Get dependencies
var express = require('express');
var morgan = require('morgan');

var app = express();
var server = require('http').Server(app);
port = process.env.PORT || 8080;

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  const request = {
    url: req.url,
    method: req.method,
    headers: req.rawHeaders,
  };
  console.log('request: %s', JSON.stringify(request, undefined, 2));

  const response = {
    status: 'OK',
    request: request,
  };

  res.send(response);
});

// use morgan to log requests to the console
app.use(morgan('dev'));

server.listen(port);
console.log('App running at http://localhost:' + port);
