const { query } = require("express");
const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19931211",
  database: "employees",
  multipleStatements: true,
});

connection.connect((err) => {
  if (!err) console.log("Database connected successfully");
  else {
    console.log(
      "Database connection failed" + JSON.stringify(err, undefined, 2)
    );
  }
});

app.put("/departments", function (req, res) {
  //   const limit = req.query;
  //   console.log(limit);
  connection.query(
    "lock tables departments read; ",
    function (error, results, fields) {
      if (error) throw error;
      //   res.send(results);
    }
  );
  connection.query(
    "select count(*) from departments",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/dept_emp", (req, res) => {
  connection.query(
    "select count(*) from dept_emp",
    function (error, results, fileds) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/unlock", (req, res) => {
  connection.query("unlock tables", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});



app.listen(3008, () => {
  console.log("Express server started at port no : " + 3000);
});
