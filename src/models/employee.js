const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  cedula: { type: Number, required: true },
  nombre: { type: String, required: true },
  libros: { type: String, required: true },
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;
