var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  host = process.env.PORT || "127.0.0.1",
  mongoose = require("mongoose"),
  Productos = require("./api/models/productosModel"), // Cargar el demolo de producto
  bodyParser = require("body-parser");

// Instancia de base de datos mongoDB con mongoose
mongoose.Promise = global.Promise;
const urlMongo =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/productosRoutes"); // Importar rutas de produtos
routes(app); // Registrar rutas

app.listen(port);

console.log("API UP in " + host + ":" + port);
