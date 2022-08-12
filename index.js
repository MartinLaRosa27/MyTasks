const express = require("express");
const cors = require("cors");
const router = require("./routes.js");
require("dotenv").config({ path: "variables.env" });

const dataBase = require("./dataBase.js");
require("./models/Project.js");
dataBase
  .sync()
  .then(() => {
    console.log("Successfully connected to sql database.");
  })
  .catch((e) => console.log(e));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router());

const server_port = process.env.YOUR_PORT || process.env.PORT || 80;
const server_host = process.env.YOUR_HOST || "0.0.0.0";
app.listen(server_port, server_host, function () {
  console.log("La aplicación esta corriendo en el puerto %d", server_port);
});
