var fs = require("fs");
var content = content + "this is the content in the file";

fs.writeFile("message.txt", content, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("it is saved");
  }
});
