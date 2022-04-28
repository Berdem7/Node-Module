const printFilms = require("./promise");

// function printFilms(str) {
//   console.log(str);
// }

async function printAllAsyncs() {
  await printFilms("A");
  await printFilms("B");
  await printFilms("C");
  //   await printFilms("A", () => {});
  //   await printFilms("B", () => {});
  //   await printFilms("C", () => {});
}

printAllAsyncs();
