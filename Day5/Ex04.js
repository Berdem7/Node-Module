var http = require("http");
var fs = require("fs");
const queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/html") {
      response.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("Ex03.html", (error, data) => {
        if (error) {
          //   console.log("error")
          throw error;
        } else {
          response.write(data);
          response.end();
        }
      });
    } else if (request.url === "/PNG") {
      response.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.readFile("image.jpeg", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.write(data);
          response.end();
        }
      });
    } else if (request.url === "/json") {
      response.writeHead(200, { "Content-Type": "application/json" });
      fs.readFile("data.json", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.write(data);
          response.end;
        }
      });
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
      response.end();
    }
  })
  .listen(3000);
