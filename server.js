var express = require('express');
var app = express();

//set the root directory of the project, required for res.sendFile.
app.use('/', express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//app is now fully initialized, listen on port 3000 and await a request from the client.
app.listen(3000, function() {
	console.log("Now listening on 3000.");
});
