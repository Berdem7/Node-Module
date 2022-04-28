const printFilms = require("./promise");

function printAllPromise() {
  printFilms("A", () => {})
    .then(() => {
      // console.log("working");
      return printFilms("B", () => {});
    })
    .then(() => {
      // console.log("func3");
      return printFilms("C", () => {});
    });
}

printAllPromise();
