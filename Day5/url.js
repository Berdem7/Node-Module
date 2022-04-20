const url = require("url");
const adr =
  "https://en.wikipedia.org/wiki/Anglo-Spanish_War_(1654%E2%80%931660)";
const q = url.parse(adr, true);

console.log(q);
