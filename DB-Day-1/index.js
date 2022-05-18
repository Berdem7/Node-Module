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

// connection.query(
//   "Select * from employees limit 1",
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   }
// );

// connection.end();

app.get("/employees", function (req, res) {
  const limit = req.query;
  console.log(limit);
  //   connection.connect();
  //   connection.query(
  //     "Select * from employees limit 1",
  //     function (error, results, fields) {
  //       if (error) throw error;
  //       res.send(results);
  //     }
  //   );
  //   connection.end();
  //   res.send("Working");

  connection.query(
    "Select * from employees limit " + limit.limit,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      //   connection.end();
    }
  );
});

app.get("/employees/:id", function (req, res) {
  const id = req.params.id;
  console.log(id);

  connection.query(
    "Select * from employees where emp_no = ?",
    id,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      //   connection.end();
    }
  );
});

app.post("/employees", (req, res) => {
  const employee = req.body;
  res.send(employee);
  connection.query(
    `insert into employees values ((select max(emp_no)+1 from employees e), '${employee.birth_date}', '${employee.first_name}', '${employee.last_name}', '${employee.gender}', '${employee.hire_date}')`,
    function (error, results, fields) {
      if (error) throw error;
      console.log("worked");
      //   connection.end();
    }
  );
});

app.listen(3000, () => {
  console.log("Express server started at port no : " + 3000);
});
