var fs = require("fs");

var content = "this is the content of the file";

fs.writeFileSync("message.txt", content);

console.log("file written successfully");
