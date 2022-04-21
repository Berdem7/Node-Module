const { fstat } = require("fs");
const http = require("http");
const os = require("os");

const json = {
  platform: os.platform(),
  architecture: os.arch(),
  release: os.release(),
  total_memory: os.totalmem(),
  total_cpus: os.cpus(),
  free_memory: os.freemem(),
};
let percentage = Number(
  ((json.free_memory / json.total_memory) * 100).toFixed(2)
);

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });

    response.write(JSON.stringify(json));
    console.log(
      `Your Operating System: ${json.release} - ${json.platform} ${json.architecture} ${percentage}% of your RAM is free.`
    );
    response.end();
  })
  .listen(3000);
