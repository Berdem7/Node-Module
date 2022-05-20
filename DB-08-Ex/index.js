const { query } = require("express");
const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "19931211",
  database: "classicmodels",
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

app.put("/employees", function (req, res) {
  const id = req.query.id;
  console.log(id);

  connection.query(
    `update employees set firstName = "${req.body.first_name}", lastName = "${req.body.last_name}" where employeeNumber=${id}`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/employee", function (req, res) {
  const id = req.query.id;

  connection.query(
    `select concat(phone, " ", extension) as phone from (select * from employees where employeeNumber=${id}) a left join offices using (officeCode);`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results[0].phone);
    }
  );
});

app.get("/order", function (req, res) {
  const orderNumber = req.query.orderNumber;

  connection.query(
    `select * from (select * from orders where orderNumber=${orderNumber}) a left join orderdetails using (orderNumber);`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.put("/order", function (req, res) {
  const orderNumber = req.query.orderNumber;
  // console.log(id);

  connection.query(
    `update orders set requiredDate = "${req.body.requiredDate}" where orderNumber=${orderNumber};`,
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.post("/order", (req, res) => {
  const order = req.body;
  const Date1 = new Date();
  const orderDate = Date1.toISOString().slice(0, 10);
  const Date2 = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const requiredDate = Date2.toISOString().slice(0, 10);
  // res.send(employee);
  connection.query(
    `begin;
    set @orderNumberMax = (select max(orderNumber)+1 from orders);
    set @productCode  = (select productCode from products where productName = "${order.productName}");
      insert into orders values ((@orderNumberMax + 1), "${orderDate}", "${requiredDate}", null,  "${order.status}", ${order.comments}, ${order.customerNumber});
      insert into orderdetails values ((@orderNumberMax + 1), @productCode, ${order.quantityOrdered}, "${order.priceEach}",  ${order.orderLineNumber});
      commit;`,
    function (error, results, fields) {
      if (error) throw error;
      res.send("worked");
      //   connection.end();
    }
  );
});

app.listen(3009, () => {
  console.log("Express server started at port no : " + 3000);
});
