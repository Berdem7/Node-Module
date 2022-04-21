const fs = require("fs");
const http = require("http");
const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.end(`<h1>Chat app</h1>`);
    }
    if (request.url === "/sse") {
      return respondSSE(request, response);
    }
    if (request.url.match(/^\/static/)) return respondStatic(request, response);
    if (request.url.match(/^\/chat/)) return respondChat(request, response);
  })
  .listen(3000);

function respondSSE(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });

  const onMessage = (msg) => {
    // let msg1 = msg.split("%20");
    // let msg2 = msg1.toString();

    let msg3 = msg.replaceAll("%20", " ");
    res.write(`data: ${msg3}\n\n`);
  };

  chatEmitter.on("message", onMessage);
  res.on("close", () => {
    chatEmitter.off("message", onMessage);
  });
}

function respondStatic(req, res) {
  const filename = `${__dirname}/public/${req.url.split("static")[1]}`;
  fs.createReadStream(filename)
    .on("error", () => {
      res.end("Not Found");
    })
    .pipe(res);
}

function respondChat(req, res) {
  const message = req.url.split("?message=")[1];
  console.log(message);
  chatEmitter.emit("message", message);
  res.end();
}
