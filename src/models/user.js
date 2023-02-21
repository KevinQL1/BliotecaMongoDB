const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  nombre_user: { type: String, required: true },
  contraseña: { type: String, required: true },
  tipo: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
