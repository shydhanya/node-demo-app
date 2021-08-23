var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('!Hello World! v1.2.3 from master build');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
