var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: "Se requiere un nombre",
  },
  descripcion: {
    type: String,
    required: "Se requiere una descripcion",
  },
  caracteristicas: {
    type: String,
    required: "Se requieren caracteristicas",
  },
  stock: {
    type: Number,
    required: "Se requiere un stock",
  },
});

module.exports = mongoose.model("Productos", ProductoSchema);
