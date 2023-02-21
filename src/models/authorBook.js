const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
  cedula: { type: Number, required: true },
  nombre: { type: String, required: true },
  nacionalidad: { type: String, required: true },
});

const Author = mongoose.model("author", autorSchema);

module.exports = Author;
