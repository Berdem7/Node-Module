const request = require("request");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/users/:userId/books/:bookId", function (req, res) {
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      const users = JSON.parse(data);
      const filteredUser = users.filter((e) => {
        if (e.id == req.params.userId) {
          return e;
        }
      });
      console.log(filteredUser);
      res.send(filteredUser);
    }
  });
  console.log(req);
  //   console.log(res);
});

app.post("/", (req, res) => {
  console.log("Got post request from client");
  res.send("Got the post request");
  console.log(req.body);
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let users = JSON.parse(data);
      if (
        users.filter((e) => {
          return e.id == req.body.id;
        }).length > 0
      ) {
        repeatedId = users.findIndex((e) => e.id == req.body.id);
        users[repeatedId] = req.body;
        fs.writeFile("user.json", JSON.stringify(users), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("written");
          }
        });
      } else {
        users.push(req.body);

        fs.writeFile("user.json", JSON.stringify(users), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("written");
          }
        });
      }
    }
  });
});

app.post("/", (req, res) => {
  console.log("Got post request from client");
  res.send("Got the post request");
  console.log(req.body);
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let users = JSON.parse(data);
      if (
        users.filter((e) => {
          return e.id == req.body.id;
        }).length > 0
      ) {
        repeatedId = users.findIndex((e) => e.id == req.body.id);
        users[repeatedId] = req.body;
        fs.writeFile("user.json", JSON.stringify(users), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("written");
          }
        });
      } else {
        users.push(req.body);

        fs.writeFile("user.json", JSON.stringify(users), (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("written");
          }
        });
      }
    }
  });
});

app.put("/", (req, res) => {
  res.send("Got the put request");
  console.log(req.body);
});

app.listen(3000);
