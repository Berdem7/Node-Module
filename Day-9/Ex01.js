const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Сайн байна уу, Намайг Бямба-Эрдэнэ гэдэг");
});

app.listen(3000);
