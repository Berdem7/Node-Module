var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    

    // response.write("<h1>Hello Node!!!</h1>\n");
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
