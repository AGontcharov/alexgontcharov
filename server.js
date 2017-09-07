var express = require('express');
var app = express();

// Sets the root directory of the project
app.use('/', express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
	console.log("Now listening on 3000.");
});