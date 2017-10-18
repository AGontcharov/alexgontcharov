var express = require('express');
var app = express();

// Sets the root directory of the project
app.use('/', express.static(__dirname + '/public'));

// Send the index file on any get request
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Create server and listen on port 3000
app.listen(3000, function() {
	console.log("Now listening on 3000.");
});