// const fs = require("fs");

// const folderPath = "/Users/mstars_lab2_07/Desktop/Node-Module";

// console.log(fs.readdirSync(folderPath));
function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(40));
