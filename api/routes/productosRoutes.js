module.exports = function (app) {
  var productos = require("../controllers/productosController");

  /**
  @swagger
  * path:
  * /productos/:
  *   get:
  *    summary: Devuelve una lista de todos los productos.
  *    description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
  *    responses:
  *      200:
  *        description: A list of users.
  *        content:
  *          application/json:
  *            schema:
  *              type: object
  *              properties:
  *                data:
  *                  type: array
  *                  items:
  *                    type: object
  *                    properties:
  *                      _id:
  *                        type: integer
  *                        description: Id de producto.
  *                        example: 1
  *                      nombre:
  *                        type: string
  *                        description: Nombre del producto.
  *                        example: Camisa Verde
  *                      descripcion:
  *                        type: string
  *                        description: Descripcion del producto.
  *                        example: Camisa verde talla M
  *                      caracteristicas:
  *                        type: string
  *                        description: Caracteracteristicas del producto.
  *                        example: ["Talla": "M"]
  *                      stock:
  *                        type: integer
  *                        description: Cantidad de productos.
  *                        example: 10
  */

  app.route("/productos").get(productos.listar_productos);
  app.route("/productos").get(productos.listar_productos);
  app.route("/productos").post(productos.crear_productos);
  app.route("/productos/:productosId").get(productos.leer_producto);
  app.route("/productos/:productosId").put(productos.actualizar_producto)
  app.route("/productos/:productosId").delete(productos.eliminar_producto);
};
