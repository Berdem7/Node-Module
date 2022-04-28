const request = require("request");

// function printFilms(str, callback) {}

// const myPromise = new Promise((resolve, reject) => {
//   request(
//     "https://ghibliapi.herokuapp.com/films",
//     function (error, response, body) {
//       if (error) {
//         reject("Failed to resolve");
//         console.log("fail");
//       } else {
//         resolve("Success");
//         console.log("hello");
//       }
//       //   console.error("error:", error); // Print the error if one occurred
//       //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//       // console.log("body:", body); // Print the HTML for the Google homepage.
//       // callback(console.log(str));
//     }
//   );
// });

function printFilms(str, callback) {
  // console.log(str);
  return new Promise((resolve, reject) => {
    request(
      "https://ghibliapi.herokuapp.com/films",
      function (error, response, body) {
        if (error) {
          reject("Failed to resolve");
          // throw error;
          console.log("fail");
        } else {
          resolve("Success");
          // callback(console.log(str));
          console.log(str);
        }
        //   console.error("error:", error); // Print the error if one occurred
        //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        // console.log("body:", body); // Print the HTML for the Google homepage.
        // callback(console.log(str));
      }
    );
  });
}

module.exports = printFilms;
