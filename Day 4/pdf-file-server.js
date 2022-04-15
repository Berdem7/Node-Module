var http = require("http");
var fs = require("fs");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf" });
    // const pdf = fs.readFileSync("Book.pdf");
    // response.end(pdf);

    fs.readFile("Book.pdf", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(3005);

console.log("Server is started");
