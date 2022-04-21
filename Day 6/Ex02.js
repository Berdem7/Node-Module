const https = require("https");
const http = require("http");
const fs = require("fs");
// http
//   .request(
//     {
//       host: "https://dev-api.mstars.mn",
//       method: "GET",
//       path: "/api/foods",
//       headers: { "Content-Type": "application/json" },
//     },
//     function (response) {
//       //   console.log(response.on(""));
//       response.setEncoding("utf8");
//       response.on("readable", function (data) {
//         // console.log(response.read());
//         console.log(data);
//       });
//     }
//   )
//   .end();
http
  .createServer((req, res) => {
    let isTrue = false;
    function changeIsTrue() {
      isTrue = true;
    }
    https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (chunk) => {
          data.push(chunk);
        });
        response.on("end", () => {
          const films = JSON.parse(Buffer.concat(data).toString());
          console.log(films);
          fs.writeFile("films.json", JSON.stringify(films), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Done");
              changeIsTrue();
            }
          });
        });
      })
      .on("error", (err) => {
        console.log("Error" + err.message);
      });
    if (isTrue) {
      res.write("<h1>Success</h1>");
    } else {
      res.write("<h1>Failure</h1>");
      eventEmitter.emit("start");
    }
    res.end();
  })
  .listen(3001);

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("started");
});
