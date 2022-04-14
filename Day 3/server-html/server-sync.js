// var fs = require("fs");

// var fileName = "content.txt";

// var content = fs.readFileSync(fileName);

// console.log("Content: " + content);

var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("<h1>Hello</h1>");
    response.write("<h1>Hello</h1>");
    response.write("<h1>Hello</h1>");
    response.write("<h1>Hello</h1>");
    response.end(fs.readFileSync("test.html"));
    // response.end();
  })
  .listen(3000);

console.log("Server is started");
