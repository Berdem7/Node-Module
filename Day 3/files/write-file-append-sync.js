var fs = require("fs");
var content = "\nWe are appending this file synchronously using node.js";

fs.appendFileSync("message.txt", content);
console.log("File appended successfully");
