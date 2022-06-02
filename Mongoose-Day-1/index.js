const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const apiRoutes = require("./routes/api");

app.use("/api", apiRoutes);
app.use(express.json());

console.log(process.env.ATLAS_CONNECTION_URL);

mongoose
  .connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

app.listen(process.env.PORT, () => {
  console.log("Application is started on PORT = " + process.env.PORT);
});
