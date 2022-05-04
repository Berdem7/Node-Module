const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
const port = 3000;
const querystring = require("querystring");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: true });

// app.get("/", function (req, res) {
//   res.render("index", { name: "Byambaa" });
// });

app.get("/404", function (req, res) {
  res.render("404", { message: "oopsie" });
});

app.get("/", async function (req, res) {
  let page = req.query.page;
  let limit = req.query.limit;

  await res.render("index", { name: "Byambaa", page: page, limit: limit });
});

app.get("/js", function (req, res) {
  let data = {
    name: "John",
    hobbies: ["playing football", "playing chess", "cycling"],
  };
  res.render("js", { data: data });
});
app.get("/color", function (req, res) {
  let data = [
    {
      name: "red",
      color: "/red.png",
    },
    {
      name: "blue",
      color: "/blue.png",
    },
    {
      name: "yellow",
      color: "/yellow.png",
    },
  ];
  res.render("color", { data: data });
});

app.post(
  "/register",
  body("email").isEmail(),
  body("phone").isLength({ min: 8, max: 8 }),
  //   body("phone").isNumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send(res.status(400).json({ errors: errors.array() }));
    }
    res.send("Registration successful");
  }
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
