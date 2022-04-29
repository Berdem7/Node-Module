const express = require("express");
const app = express();
const request = require("request");

app.get("/films", (req, res) => {
  request("https://ghibliapi.herokuapp.com/films", (err, data, body) => {
    if (err) {
      throw err;
    } else {
      let films = JSON.parse(body);
      const table1 = "<table border=3>";
      const table2 = "</table>";
      tableHead = `<tr>
        <th >Киноны нэр</th>
        <th >Киноны япон нэр</th>
        <th >Киноны галиг нэр</th>
        <th >Киноны зураг</th>
        </tr>
        `;

      let tableMain = "";
      films.map((e) => {
        tableMain += `<tr>
        <td >${e.title}</td>
        <td >${e.original_title}</td>
        <td >${e.original_title_romanised}</td>
        <td ><img src = ${e.image} alt="" width = 100 height = 100></td>
        </tr>
        `;
      });
      const filmsHtml = table1 + tableHead + tableMain + table2;
      res.send(filmsHtml);
    }
  });
});

app.listen(3000);
