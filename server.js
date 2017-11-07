'use strict';

var express = require('express');

var app = express();
var path =  process.env.NODE_ENV ? '/public/app' : '/dist';

// Server static content
app.use('/', express.static(__dirname + path));

// Send the index file on any get request
app.get('*', function(req, res) {
  res.sendFile(__dirname + path + '/index.html');
});

var port = process.env.PORT || 3000;

// Create HTTP server
app.listen(port, function() {
  console.log('Now listening on', port);
});