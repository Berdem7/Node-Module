var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    // response.write("<h1>Hello</h1>");
    fs.readFile("content.html", function (error, data) {
      if (error) {
        throw error;
      } else {
        //   console.log("Operation success");
        console.log(data);
        // data;
        response.end(data);
      }
    });
    // response.write(

    // );
    // response.end();
  })
  .listen(3003);

console.log("Server is started");
