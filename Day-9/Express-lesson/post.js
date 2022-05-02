const request = require("request");
const express = require("express");
const fs = require("fs");

const app = express();

app.post("/users/:userId/books/:bookId", function (req, res) {
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(JSON.parse(data));
    }
  });
  res.send(req.params);
  console.log(req.params);
  //   console.log(res);
});

app.listen(3000);
