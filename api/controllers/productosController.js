const Productos = require("../models/productosModel");
module.exports = {
  // Metodo para la busqueda de productos por ID
  getById: function (req, res, next) {
    console.log(req.body);
    Productos.findById(req.params.productoId, function (err, producto) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "200",
          message: "Productos found!!!",
          data: productos,
        });
      }
    });
  },
  // Metodo para retornar todos los productos registrados en la base de datos
  getAll: function (req, res, next) {
    let productosList = [];
    Productos.find({}, function (err, productos) {
      if (err) {
        next(err);
      } else {
        for (let producto of productos) {
          productosList.push(producto);
        }
        res.json({
          status: "200",
          message: "Productos list found!!!",
          data: { productos: productosList },
        });
      }
    });
  },
  // Metodo para actualizar algun registro de la base de datos por ID
  updateById: function (req, res, next) {
    Productos.findOneAndUpdate(
      req.params.productoId,
      req.body,
      function (err, producto) {
        if (err) next(err);
        else {
          res.json({
            status: "200",
            message: "Productos updated successfully!!!",
            data: producto,
          });
        }
      },
    );
  },
  // Metodo para eliminar algun registro de la base de datos por ID
  deleteById: function (req, res, next) {
    Productos.findByIdAndRemove(
      req.params.productoId,
      function (err, producto) {
        if (err) next(err);
        else {
          res.json({
            status: "200",
            message: "Productos deleted successfully!!!",
            data: null,
          });
        }
      },
    );
  },
  //Metodo para crear algun registro nuevo
  create: function (req, res, next) {
    Productos.create(req.body, function (err, result) {
      if (err) next(err);
      else
        res.json({
          status: "200",
          message: "Producto added successfully!!!",
          data: null,
        });
    });
  },
};

/*
exports.getAll = function (req, res) {
  Productos.find({}, function (err, productos) {
    if (err) res.send(err);
    res.json(productos);
  });
};

exports.create = function (req, res) {
  var newProducto = new Productos(req.body);
  newProducto.save(function (err, productos) {
    if (err) res.send(err);
    res.json(productos);
  });
  Productos.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
    if (err) 
     next(err);
    else
     res.json({status: "200", message: "Productos added successfully!!!", data: null});
    
  });
},
};

exports.getById = function (req, res) {
  Productos.findById(req.params.productosId, function (err, productos) {
    if (err) res.send(err);
    res.json(productos);
  });
};

exports.updateById = function (req, res) {
  Productos.findByIdAndUpdate(
    { _id: req.params.productosId },
    req.body,
    { new: true },
    function (err, productos) {
      if (err) res.send(err);
      res.json(productos);
    },
  );
};

exports.deleteById = function (req, res) {
  Productos.findByIdAndRemove(
    {
      _id: req.params.productosId,
    },
    function (err, productos) {
      if (err) res.send(err);
      res.json({ message: "Productos successfully deleted" });
    },
  );
};
*/
