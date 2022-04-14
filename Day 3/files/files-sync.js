var fs = require("fs");

var fileName = "content.txt";

var content = fs.readFileSync(fileName);

console.log("Content: " + content);
