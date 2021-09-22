// Cargamos el modulo express
const express = require("express");
const router = express.Router();
// Cargamos el controlador del producto
const productos = require("../controllers/productosController");

/**
 @swagger
 * /productos:
 *   get:
 *    summary: Devuelve una lista de todos los productos.
 *    description: Retrieve a list of productos from JSONPlaceholder. Can be used to populate a list of fake productos when prototyping or testing an API.
 *    responses:
 *      200:
 *        description: A list of productos.
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

/**
 @swagger
 * /productos/{productosId}:
 *   get:
 *    summary: Devuelve un producto.
 *    description: Retrieve a list of productos from JSONPlaceholder. Can be used to populate a list of fake productos when prototyping or testing an API.
 *    parameters:
 *       - in: path
 *         producto: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *      200:
 *        description: A list of productos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: object
 *                  items:
 *                    type: object
 *                    properties:
 *                      _id:
 *                        type: string
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
router.get("/:productosId", productos.getById);

/**
 * @swagger
 * /producto:
 *   post:
 *     summary: Crea un Producto.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The productos ID.
 *                       example: 0
 *                     nombre:
 *                       type: string
 *                       description: The productos name.
 *                       example: Leanne Graham
 *                     descripcion:
 *                       type: string
 *                       description: The productos descripcion.
 *                       example: description
 *                     caracteristicas:
 *                       type: string
 *                       description: The productos caracteristicas.
 *                       example: []
 *                     stock:
 *                       type: integer
 *                       description: The productos stock.
 *                       example: 10
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: The productos name.
 *                 example: Leanne Graham
 *               descripcion:
 *                 type: string
 *                 description: The productos name.
 *                 example: Leanne Graham
 *               caracteristicas:
 *                 type: string
 *                 description: The productos name.
 *                 example: Leanne Graham
 *               stock:
 *                 type: integer
 *                 description: The productos name.
 *                 example: Leanne Graham
 */
router.post("/", productos.create);

/**
 * @swagger
 * /producto/{productosId}:
 *   put:
 *      summary: Edita un Producto.
 *      parameters:
 *       - in: path
 *         producto: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: The productos.
 *                 example: Leanne Graham
 *               nombre:
 *                 type: string
 *                 description: The productos.
 *                 example: Leanne Graham
 *               descripcion:
 *                 type: string
 *                 description: The productos descripcion.
 *                 example: Leanne Graham
 *               caracteristicas:
 *                 type: string
 *                 description: The productos caracteristicas.
 *                 example: Leanne Graham
 *               stock:
 *                 type: integer
 *                 description: The productos stock.
 *                 example: Leanne Graham
 *      responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The productos ID.
 *                       example: 0
 *                     nombre:
 *                       type: string
 *                       description: The productos name.
 *                       example: Leanne Graham
 *                     descripcion:
 *                       type: string
 *                       description: The productos name.
 *                       example: Leanne Graham
 *                     caracteristicas:
 *                       type: string
 *                       description: The productos name.
 *                       example: Leanne Graham
 *                     stock:
 *                       type: integer
 *                       description: The productos name.
 *                       example: Leanne Graham
 */
router.put("/:productosId", productos.updateById);

/**
 @swagger
 * /productos/{productosId}:
 *   delete:
 *    summary: Elimina un producto.
 *    description: Retrieve a list of productos from JSONPlaceholder. Can be used to populate a list of fake productos when prototyping or testing an API.
 *    parameters:
 *       - in: path
 *         producto: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string
 *    responses:
 *      200:
 *        description: A delete of productos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: object
 *                  items:
 *                    type: object
 *                    properties:
 *                      status:
 *                        type: string
 *                        description: estado.
 *                        example: Camisa Verde
 *                      message:
 *                        type: string
 *                        description: Descripcion del producto.
 *                        example: Productos deleted successfully!!!
 *                      data:
 *                        type: string
 *                        description: Caracteracteristicas del producto.
 *                        example: null
 */
router.delete("/:productosId", productos.deleteById);

module.exports = router;
