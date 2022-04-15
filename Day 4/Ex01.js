var http = require("http");
let obj = {
  Type: "animal",
  Race: "Sheep",
};
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};

http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(obj));
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
