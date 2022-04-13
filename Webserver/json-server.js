var http = require("http");
var fs = require("fs");
let obj = [
  {
    name: "Byambaa",
    job: "student",
  },
];
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
let json = {
  status: 200,
  message: "successful",
  result: obj,
  code: 2000,
};

http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(obj));
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
