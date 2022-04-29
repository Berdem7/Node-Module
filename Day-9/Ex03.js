const express = require("express");
const app = express();
const fs = require("fs");

app.get("/get-data", (req, res) => {
  const readStream = fs.createReadStream("data/data.csv");
  readStream.on("open", function () {
    readStream.pipe(res);
  });
  readStream.on("error", function (err) {
    res.end(err);
  });
});

app.listen(3000);
