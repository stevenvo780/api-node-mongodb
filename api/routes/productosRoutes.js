module.exports = function (app) {
  var productos = require("../controllers/productosController");

  app
    .route("/productos")
    .get(productos.listar_productos)
    .post(productos.crear_productos);

  app
    .route("/productos/:productosId")
    .get(productos.leer_producto)
    .put(productos.actualizar_producto)
    .delete(productos.eliminar_producto);
};
