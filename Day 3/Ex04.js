var http = require("http");
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
let obj = {
  success: false,
  Data: [
    {
      name: "MyName",
      Age: 23,
    },
    {
      name: "NextName",
      Age: 26,
    },
  ],
};

http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(obj));
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
