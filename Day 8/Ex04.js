const request = require("request");
const http = require("http");
const fs = require("fs-extra");

http
  .createServer((request, response) => {
    if (request.url == "/ghibli=films") {
      () =>
        request(
          "https://ghibliapi.herokuapp.com/films",
          (error, data, body) => {
            let filmData = [];
            body.map((e) => {
              let obj = {
                title: e.title,
                image: e.image,
              };
              filmData.push(obj);
            });
            console.log(filmData);
          }
        );
    }
  })
  .listen(3000);
