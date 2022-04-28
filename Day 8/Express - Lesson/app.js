const express = require("express");
const request = require("request");

const app = express();

app.get("/api/foods", (req, res) => {
  request("https://dev-api.mstars.mn/api/foods", (error, data, body) => {
    if (error) {
      throw error;
    } else {
      let foods = JSON.parse(body);
      const table1 = "<table border=5>";
      const table2 = "</table>";
      tableHead = `<tr>
      <th >Хоолны нэр</th>
      <th >Хоолны үнэ</th>
      <th >Хоолны порц</th>
      <th >Хоолны үлдэгдэл</th>
      </tr>
      `;

      let tableMain = "";
      //   for (let i = 0; i < foods.data.length; i++) {
      //     // console.log(res);
      //     // res.write(`
      //     tableMain += `<tr>
      //         <td >${foods.data[i].name}</td>
      //         <td >${foods.data[i].price}</td>
      //         <td >${foods.data[i].portion}</td>
      //         <td >${foods.data[i].stock}</td>
      //         </tr>
      //         `;
      //   }

      foods.data.map((e) => {
        tableMain += `<tr>
            <td >${e.name}</td>
            <td >${e.price}</td>
            <td >${e.portion}</td>
            <td >${e.stock}</td>
            </tr>
            `;
      });
      let foodsHtml = table1 + tableHead + tableMain + table2;
      //   foods.data.map((e) => {
      //     res.send(`<h1>${e.name}</h1>`);
      //     res.send(`<h1>${e.price}</h1>`);
      //     res.send(`<h1>${e.quantity}</h1>`);
      //     // res.send(`${e.name}`);
      //     // return e.name;
      //   });
      res.send(foodsHtml);
    }
  });
});

app.listen(5000);
