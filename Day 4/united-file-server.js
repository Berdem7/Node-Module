var http = require("http");
var fs = require("fs");
const queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(`<h1>This is Header</h1>`);
      response.write(`<a href="http://localhost:3005/pdf">Nom</a>`);
      response.write(`<br><a href="http://localhost:3005/image">Zurag</a>`);
      response.write(`<br><a href="http://localhost:3005/audio">Duu</a>`);
      response.end();
    } else if (request.url === "/pdf") {
      response.writeHead(200, { "Content-Type": "application/pdf" });
      fs.readFile("Book.pdf", (error, data) => {
        if (error) {
          console.log("error");
          throw error;
        } else {
          console.log("success");
          response.write(data);
          response.end();
        }
      });
    } else if (request.url === "/image") {
      response.writeHead(200, { "Content-Type": "image/jpeg" });
      fs.readFile("image.jpeg", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.write(data);
          response.end();
        }
      });
    } else if (request.url === "/q?a=3&x=4&y=5&z=6") {
      const { a, x, y, z } = queryString.parse(request.url.slice(3));
      //   console.log(typeof a);
      console.log(request.url[1]);
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(`${Number(a) + Number(x) + Number(y) + Number(z)}`);
      response.end();
    } else if (request.url[1] === `q`) {
      const { question } = queryString.parse(request.url.slice(3));
      //   console.log(typeof question);
      console.log(question);
      let answer = "";
      if (question == "why" || question == "Why") {
        answer = "Doesn't matter";
      } else if (question == "hi" || question == "Hi") {
        answer = "Bye";
      } else {
        answer = "Ok";
      }

      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(`${answer}`);
      response.end();
    } else if (request.url === "/audio") {
      response.writeHead(200, { "Content-Type": "audio/mp3" });
      fs.readFile("audio.mp3", (error, data) => {
        if (error) {
          throw error;
        } else {
          response.write(data);
          response.end();
        }
      });
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
      response.end();
    }
  })
  .listen(3005);
