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

app.get("/company", function (req, res) {
  const limit = req.query;
  connection.query(
    `Select count(*) as result from titles where title= "${limit.title}"`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/employees", function (req, res) {
  const limit = req.query;
  console.log(limit.dept);
  connection.query(
    `select sum(salary) as totalSalaryOf${limit.dept} from departments left join (select dept_no, salary from dept_emp left join salaries using(emp_no)) a using( dept_no) where dept_name="${limit.dept}" group by dept_no;`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/managers/:column", function (req, res) {
  const limit = req.params.column;
  connection.query(
    `select emp_no, dept_no, first_name, last_name, ${limit} from (select * from dept_manager left join employees using(emp_no)) a left join salaries using(emp_no);`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.listen(3005, () => {
  console.info("Express server started at port no : " + 3000);
});
