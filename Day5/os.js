//1. call os module
// 2. i want to know the following info:
// a. home directory
// b. operating system type
// c. last reboot
// d. username
// write a http server, which works on port = 3000 and return the above inf in JSON format
// url module CPU

const http = require("http");
const os = require("os");

const homedirectory = os.homedir();
const oSType = os.type();
const lastreboot = os.uptime();
const userName = os.hostname();
// console.log(os.cpus());
const data = os.cpus();

let json = {
  home_directory: homedirectory,
  OS_type: oSType,
  last_reboot: lastreboot,
  username: userName,
};

http
  .createServer((request, response) => {
    if (request.url === "/os") {
      response.writeHead(200, { "Content-Type": "text/html" });
      data.map((e) => {
        let element = JSON.stringify(e);
        let times = JSON.stringify(e.times);
        console.log(e.times.user);
        // let user = JSON.stringify(times.user);
        // console.log(user);
        response.write(`<table style="border:1px solid black">
        <tr>
        <th style="border:1px solid black">Model</th>
        <th style="border:1px solid black">Speed</th>

        </tr>
        <tr>
        <td style="border:1px solid black">${e.model}</td>
        <td style="border:1px solid black"> ${e.speed}</td>

        </tr>
        </table>`);

        response.write(`
        <h3>Times</h3>
        <table style="border:1px solid black">
        <tr>
        <th style="border:1px solid black">user</th>
        <th style="border:1px solid black">nice</th>
        <th style="border:1px solid black">sys</th>
        <th style="border:1px solid black">idle</th>
        <th style="border:1px solid black">irq</th>

        </tr>
        <tr>
        <td style="border:1px solid black">${e.times.user}</td>
        <td style="border:1px solid black">${e.times.nice}</td>
        <td style="border:1px solid black">${e.times.sys}</td>
        <td style="border:1px solid black">${e.times.idle}</td>
        <td style="border:1px solid black">${e.times.irq}</td>

        </tr>
        </table>`);
        response.write("<hr>");
        // response.write(`<h1>${e.model}</h1>`);
        // response.write(`<h1>${e.speed}</h1>`);
        // response.write(JSON.stringify(element.times));
      });
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(json));
      response.end();
    }
  })
  .listen(3000);
