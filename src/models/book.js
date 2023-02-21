const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  isbn: { type: Number, required: true },
  editorial: { type: String, required: true },
  genero: { type: String, required: true },
  publicacion: { type: Number, required: true },
  autor: { type: String, required: true },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
