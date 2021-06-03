var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  host = process.env.PORT || "127.0.0.1",
  mongoose = require("mongoose"),
  Productos = require("./api/models/productosModel"), // Cargar el demolo de producto
  bodyParser = require("body-parser");
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

// Instancia de base de datos mongoDB con mongoose
mongoose.Promise = global.Promise;
const urlMongo =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/productosRoutes"); // Importar rutas de produtos
routes(app); // Registrar rutas

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Example Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Steven",
        url: "https://www.linkedin.com/in/steven-vallejo-ortiz-430213155/",
        email: "stevenvallejo@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./api/routes/productosRoutes.js"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
app.listen(port);

console.log("API UP in " + host + ":" + port);
