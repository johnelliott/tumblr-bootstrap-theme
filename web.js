var express = require('express');
var app = express();
app.use(express.logger());
app.use('/', express.static(__dirname, '/')); // added this to serve up the files in the main directory

app.get('/', function(request, response) {
    var fs = require('fs');
    var buf = new Buffer(fs.readFileSync('index.html'), 'Utf-8');
    response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
