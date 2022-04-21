const https = require("https");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    }
    https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (chunk) => {
          data.push(chunk);
        });
        response.on("end", () => {
          const films = JSON.parse(Buffer.concat(data).toString());
          //   console.log(films);
          fs.writeFile("films.json", JSON.stringify(films), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Done");
            }
          });
        });
      })
      .on("error", (err) => {
        console.log("Error" + err.message);
      }));

    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("films.json", (error, data1) => {
      if (error) {
        throw error;
      } else {
        let data2 = JSON.parse(data1);
        // res.end(
        //   `<table>
        //     ${data2.map((e) => {
        //       `<tr>
        //         <td>${e.title}</td>
        //         <td>${e.image}</td>
        //       </tr>`;
        //     })}</table>`
        // );
        res.end(
          data2.map((e) => {
            `<h1>${e.title}</h>`;
          })
        );
      }
    });
    // res.end();
  })
  .listen(3002);
