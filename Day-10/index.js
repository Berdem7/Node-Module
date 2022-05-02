const e = require("express");
const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send("It is a root path");
});
app.get("/library", (req, res) => {
  console.log(req.query.userId);
  let IdArray = [];

  // if(req.query.userId == )
  fs.readFile("library.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      //   res.send(data);
      //   console.log(JSON.parse(data));
      JSON.parse(data).map((e) => {
        let obj = { userId: e.user.id, bookId: e.book.id };
        IdArray.push(obj);
        console.log(IdArray);
      });

      if (
        IdArray.filter(
          (e) => e.userId == req.query.userId && e.bookId == req.query.bookId
        )
      ) {
        res.send(data);
      } else {
        res.send("Tus data baihgui baina");
      }
    }
  });
});

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send(req.body);
    console.log(req.body);
  })
  .put((req, res) => {
    res.send(req.body);
  });

app.listen(3006, function (err) {
  if (err) {
    console.log(err);
  }
});
