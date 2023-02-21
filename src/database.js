const mongoose = require("mongoose");

const URL =
  "mongodb+srv://Kevin:Kevin123@cluster0.ykje8d3.mongodb.net/LaBiblioteca?retryWrites=true&w=majority";

mongoose
  .connect(URL)
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
