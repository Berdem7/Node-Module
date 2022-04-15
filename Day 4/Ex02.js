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
    response.write("<h1>This is header</h1>");
    response.write("<p>This is a paragraph</p>");
    response.write(`<ol>
    Ordered list
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    </ol>`);
    response.write(`<ul>
    Unordered list
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    </ul>`);
    response.write("<p>This is a paragraph</p>");
    response.end();
  })
  .listen(3001);
console.log("Server running at http://localhost:3001");
