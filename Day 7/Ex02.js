const https = require("https");
const http = require("http");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const fs = require("fs");

eventEmitter.on("films", () => {
  https.get("https://ghibliapi.herokuapp.com/films ", (response) => {
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
        }
      });
    });
  });
});

http
  .createServer((request, response) => {
    if (request.url == "/films") {
      eventEmitter.emit("films");
    }
  })
  .listen(3001);
