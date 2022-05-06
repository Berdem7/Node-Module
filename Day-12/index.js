const express = require("express");
const app = express();
const logStuff = require("./log_stuff");

// app.get("/user/id", function (req, res) {
//   res.send("#1");
//   console.log("#1");
// });

// app.get("/user/:id", function (req, res) {
//   res.send("#2");
//   console.log("#2");
// });

// app.get(
//   "/user/:id",
//   function (req, res, next) {
//     const user_id = req.params.id;
//     if (user_id > 2000) next("route");
//     if (user_id < 50) next();
//     res.send("I will send user information #1");
//     console.log("#1");
//   },
//   function (req, res, next) {
//     res.send("I will send user information #1.1");
//     console.log("#1.1");
//   }
// );

app.get("/user/:id", function (req, res) {
  res.send("I will send user information #2");
  console.log("#2");
});

app.get("/arrayuser/:id", logStuff, function (req, res, next) {
  res.send(logStuff[0]);
});

app.listen(3000);
