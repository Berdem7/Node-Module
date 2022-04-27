const https = require("https");
const http = require("http");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const fs = require("fs");

eventEmitter.on("films", () => {
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
      console.log(films);
      const table1 = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
      <table border=5>`;
      const table2 = `</table>
      </body>
</html>`;
      let tableMain = "";
      for (let i = 0; i < films.length; i++) {
        tableMain += `<tr>
            <td >${films[i].title}</td>
            <td><img src= ${films[i].image} alt="" height=30 width=30></img></td>
            </tr>
            `;
      }
      let filmHtml = table1 + tableMain + table2;

      fs.writeFile("films.html", filmHtml, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(filmHtml);
        }
      });
    });
  });
});

eventEmitter.on("people", () => {
  https.get("https://ghibliapi.herokuapp.com/people", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const people = JSON.parse(Buffer.concat(data).toString());
      console.log(people);
      const table1 = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
      <table border=5>`;
      const table2 = `</table>
      </body>
</html>`;
      let tableMain = "";
      for (let i = 0; i < people.length; i++) {
        tableMain += `<tr>
              <td >${people[i].name}</td>
              <td >${people[i].age}</td>
              <td >${people[i].gender}</td>
              </tr>
              `;
      }
      let peopleHtml = table1 + tableMain + table2;

      fs.writeFile("people.html", peopleHtml, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(peopleHtml);
        }
      });
    });
  });
});

http
  .createServer((request, response) => {
    if (request.url == "/ghibli=films") {
      eventEmitter.emit("films");
    }
    if (request.url == "/ghibli=people") {
      eventEmitter.emit("people");
    }
    response.end();
  })
  .listen(3000);
