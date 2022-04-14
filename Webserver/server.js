var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("index.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("Operation success");
        console.log(data);
        response.end();
      }
    });

    // response.write("<h1>Hello Node!!!</h1>\n");
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
