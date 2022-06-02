const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/users", (req, res) => {
  db.Users.find({}, function (err, data) {
    if (err) return handleError(err);
    res.json({
      data: data,
    });
  });
  //   res.send({ data: "data" });
});

router.post("/users", (req, res) => {
  const reqBody = req.body;
  //   console.log(user);
  let newUser = new Users(reqBody);
  newUser
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });

  res.send("Success");
});

module.exports = router;
