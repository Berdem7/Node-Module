// var fs = require("fs");

// var fileName = "content.txt";

// var content = fs.readFileSync(fileName);

// console.log("Content: " + content);

var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.end(fs.readFileSync("content.html"));
    // response.end();
  })
  .listen(3002);

console.log("Server is started");
