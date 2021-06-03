const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";
const mongoose = require("./config/database/config");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerInfo = require("./swaggerInfo");
app.set("secretKey", process.env.JWT || "CalveSecreta"); // Clave Secreta para nuestro JWT

// Instancia de base de datos mongoDB con mongoose
mongoose.connection.on(
  "error",
  console.error.bind(console, "Error de conexion en MongoDB"),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerInfo));
// Para acceder a las rutas de peliculas hemos definido middleware para validar al usuario.
function private(req, res, next) {
  let token = req.headers.authorization.substring(7);
  jwt.verify(token, req.app.get("secretKey"), function (err, decoded) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
}
const productos = require("./api/routes/productosRoutes"); // Importar rutas de produtos
const users = require("./api/routes/userRoutes"); // Importar rutas de usuarios
// Rutas privadas
app.use("/productos", private, productos);
// Rutas publicas
app.use("/users", users);

// Manejando errores HTTP 404 para solicitudes de contenido inexistente
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
// Manejo de errores, respuestas con codigo HTTP 500, HTTP 404
app.use(function (err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Error interno en el servidor!!" });
});

app.listen(port);

console.log("API UP in " + host + ":" + port);
