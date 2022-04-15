var http = require("http");
var fs = require("fs");
var query = require("querystring");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "image/jpeg" });
    fs.readFile("image.jpeg", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(3006);
