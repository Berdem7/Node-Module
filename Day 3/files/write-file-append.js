var fs = require("fs");

var content = "\nthis data will be appended at the end of the file";

fs.appendFile("message.txt", content, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("the new content is appended successfully");
  }
});
