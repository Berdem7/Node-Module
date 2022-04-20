const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("Ex03.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(3002);
