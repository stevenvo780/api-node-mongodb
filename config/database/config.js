//Cargando el modulo de mongoose
const mongoose = require("mongoose");
//Configurando la conexion para MongoDB, Debemos indicar el puerto y la IP de nuestra BD
const mongoDB =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;
