// NodeJS file core module

var file = require("fs");

//энэ модулийг ашиглаад message.txt гэдэг файлны доторх контентийг уншъя
file.readFile("message.txt", (error, data) => {
  if (error) {
    // хэрвээ алдаа гарвал
    console.log("Error is happening");
    throw error;
  } else {
    console.log("Content: " + data);
  }
});
