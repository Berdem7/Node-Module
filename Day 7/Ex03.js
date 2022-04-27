const EventEmitter = require("events");
const https = require("https");
const http = require("http");
const fs = require("fs");
const eventEmitter = new EventEmitter();

eventEmitter.on("films-show", (res) => {
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
      //   let data = films;
      console.log(films);
      //   fs.writeFile("films.json", JSON.stringify(films), (err) => {
      //     if (err) {
      //       console.log(err);
      //     } else {
      //       console.log("Done");
      //     }
      //   });
      //   response.writeHead(200, { "Content-Type": "text/html" });
      const table1 = "<table border=5>";
      const table2 = "</table>";
      let tableMain = "";
      for (let i = 0; i < films.length; i++) {
        // console.log(res);
        // res.write(`
        tableMain += `<tr>
            <td >${films[i].title}</td>
            <td><img src= ${films[i].image} alt="" height=30 width=30></img></td>
            </tr>
            `;
      }
      let filmHtml = table1 + tableMain + table2;

      //   res.write("</table>");
      fs.writeFile("films.html", filmHtml, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(filmHtml);
        }
      });
      //   res.end();
    });
  });
});

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (request.url == "/films/show") {
      eventEmitter.emit("films-show", response);
      //   fs.readFile("films.html", (err, data) => {
      //     if (err) {
      //       throw err;
      //     } else {
      //       data;
      //     }
      //   });
      //   films.map((e) => {
      //     response.write("<h1>e.title</h1>");
      //   });
    }
    response.end();
  })
  .listen(3002);
