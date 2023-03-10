const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("./database");

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/biblioteca/api", require("./routes/routes.js"));


//Static files
app.use(express.static(path.join(__dirname + "/public")));

//Start server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
