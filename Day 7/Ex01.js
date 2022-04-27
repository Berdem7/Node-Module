const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const http = require("http");
const { listenerCount } = require("process");

eventEmitter.on("start", () => {
  console.log("Хүсэлтийг амжилттай хүлээн авлаа");
});

http
  .createServer((request, response) => {
    if (request.url == "/") {
      eventEmitter.emit("start");
    }
    response.end();
  })
  .listen(3000);
