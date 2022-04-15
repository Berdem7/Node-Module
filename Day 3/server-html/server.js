var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    // response.write("<h1>Hello</h1>");
    response.write(
      fs.readFile("index.html", function (error, data) {
        if (error) {
          throw error;
        } else {
          console.log("Operation success");
          console.log(data);
          response.end();
        }
      })
    );
    // response.end();
  })
  .listen(3000);

console.log("Server is started");
