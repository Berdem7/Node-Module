const express = require("express");
const app = express();
const fs = require("fs");

app.get("/get-data", (req, res) => {
  fs.readFile("data/data.csv", "utf-8", (error, data) => {
    if (error) {
      throw error;
    } else {
      const dataArray = data.split(/\r?\n/);
      res.send(dataArray);
    }
  });
});

app.listen(3000);
