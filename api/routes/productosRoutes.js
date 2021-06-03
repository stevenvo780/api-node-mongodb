// Cargamos el modulo express
const express = require("express");
const router = express.Router();
// Cargamos el controlador del producto
const productos = require("../controllers/productosController");

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

router.get("/", productos.getAll);
router.get("/:productosId", productos.getById);
router.post("/", productos.create);
router.put("/:productosId", productos.updateById);
router.delete("/:productosId", productos.deleteById);

module.exports = router;
