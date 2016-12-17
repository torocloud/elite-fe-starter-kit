/*jslint unparam:true*/

'use strict';

var dataLoader = require('./libs/loader.js');
var http = require('http');
var https = require('https');

var basicHandler = function (promise, req, res) {
  promise
    .fail(function (err) {
      res.status(500).send(err);
    })
    .then(function (data) {
      res.status(200).send(data);
    });
};

module.exports = function (app) {

  app.get('/api/test', function (req, res) {
    basicHandler(dataLoader('test.json'), req, res);
  });

  app.get('/api/artist', function(req, res) {
    https.get('https://api.spotify.com/v1/search?q=the%20script&type=artist', function(response) {
      var data = ''
      response.on('data', function (chunk) {
        data += chunk;
      });

      response.on('end', function () {
        res.status(200).send(data);
      });
    })
  });
};
