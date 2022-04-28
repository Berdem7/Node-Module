const fs = require("fs-extra");
const http = require("http");
const request = require("request");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("films-show", () => {
  request("https://ghibliapi.herokuapp.com/films", (error, data, body) => {
    // let films = [];
    if (error) {
      throw error;
    } else {
      //   films.push(body);

      fs.writeFile("films.json", body, (error) => {
        if (error) {
          throw error;
        }
        {
          console.log("Written");
        }
      });
    }
  });
});

http
  .createServer((request, response) => {
    if (request.url === "/films") {
      eventEmitter.emit("films-show");
    }
  })
  .listen(3000);
