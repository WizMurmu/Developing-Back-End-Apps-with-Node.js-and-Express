var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Worldddddddddddddddddd!');
// }).listen(8080);
function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
  