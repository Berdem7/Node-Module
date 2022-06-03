const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Users = require("../models/Users");
const bodyParser = require("body-parser");
const cors = require("cors");

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/users", (req, res) => {
  Users.find({}, function (err, data) {
    if (err) throw err;
    res.json(data);
  });
  //   res.send({ data: "data" });
});

router.post("/users", jsonParser, (req, res) => {
  const reqBody = req.body;
  // console.log(req.body);
  let newUser = new Users({
    _id: mongoose.Types.ObjectId(),
    name: reqBody.name,
    email: reqBody.email,
    phone: reqBody.phone,
    password: reqBody.password,
  });
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

router.delete("/users/:id", (req, res) => {
  console.log(req.params.id);
  Users.findOneAndRemove({ _id: req.params.id }, function (err, data) {
    if (err) throw err;
    // res.json(data);
    res.send("deleted");
  });
  //   res.send({ data: "data" });
});

router.put("/users", jsonParser, (req, res) => {
  // console.log(req.body);
  Users.findByIdAndUpdate(
    req.body.id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    },
    function (err, data) {
      if (err) throw err;
      // res.json(data);
      res.send("updated");
    }
  );
  // res.send({ data: "data" });
});

module.exports = router;
