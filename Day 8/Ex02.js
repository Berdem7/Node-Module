const request = require("request");

// function films() {
request("https://ghibliapi.herokuapp.com/films", (err, data, body) => {
  if (err) {
    throw err;
  } else {
    console.log(body);
  }
});
// }
