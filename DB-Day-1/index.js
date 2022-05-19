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

app.get("/employees", function (req, res) {
  const limit = req.query;
  console.log(limit);
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
  if (typeof id !== "string") {
    connection.query(
      "Select * from employees where emp_no = ?",
      id,
      function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      }
    );
  }
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

app.put("/employees", (req, res) => {
  const employee = req.body;
  // res.send(employee);
  res.send(employee);
  connection.query(
    `update employees set first_name = "${employee.first_name}", last_name = "${employee.last_name}", gender = "${employee.gender}" where emp_no = ${employee.emp_no} `,
    function (error, results, fields) {
      if (error) throw error;
      console.log("worked");
      //   connection.end();
    }
  );
});

app.delete("/employees/:id", (req, res) => {
  const employee = req.params.id;
  res.send(employee);
  // res.send(employee);
  connection.query(
    `delete from employees where emp_no = ${employee}; `,
    function (error, results, fields) {
      if (error) throw error;
      console.log("worked");
      //   connection.end();
    }
  );
});

app.get("/employeess/salary", function (req, res) {
  // const limit = req.params.column;
  connection.query(
    `select * from employees left join salaries using(emp_no) limit 10;`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/employeess/departments", function (req, res) {
  // const limit = req.params.column;
  connection.query(
    `select emp_no, first_name, last_name, a.* from employees left join (select * from dept_emp left join departments using(dept_no)) a using(emp_no) limit 10;`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/employeess/maxsalary", function (req, res) {
  // const limit = req.params.column;
  connection.query(
    `select emp_no, first_name, last_name, gender, salary from (select * from salaries where salary = (select max(salary) from salaries)) a left join employees using (emp_no);`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/employeess", function (req, res) {
  const search = req.query.search;
  // res.send(search);
  connection.query(
    `select * from employees where first_name like "%${search}%";`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.listen(3000, () => {
  console.log("Express server started at port no : " + 3000);
});
