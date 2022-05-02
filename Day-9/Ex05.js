const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});

app.get("/get-data", (req, res) => {
  fs.readFile("data/data.csv", "utf-8", (error, data) => {
    if (error) {
      throw error;
    } else {
      // const dataArray = data.split(/\r?\n/);
      const jsonData = toJSON(data);
      console.log(jsonData);
      res.send(jsonData);
    }
  });
});

app.listen(3001);

const toJSON = (csv) => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  lines.map((l) => {
    const obj = {};
    const line = l.split(",");

    headers.map((h, i) => {
      obj[h] = line[i];
    });
    result.push(obj);
  });
  return JSON.stringify(result);
};
