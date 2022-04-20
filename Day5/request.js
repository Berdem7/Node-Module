const http = require("https");
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
  .get("https://dev-api.mstars.mn/api/foods", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const foods = JSON.parse(Buffer.concat(data).toString());
      console.log(foods);
      fs.writeFile("food.json", JSON.stringify(foods), (err) => {
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
  });
