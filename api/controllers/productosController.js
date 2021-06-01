var mongoose = require("mongoose"),
  Productos = mongoose.model("Productos");

exports.listar_productos = function (req, res) {
  Productos.find({}, function (err, productos) {
    if (err) res.send(err);
    res.json(productos);
  });
};

exports.crear_productos = function (req, res) {
  var newProducto = new Productos(req.body);
  newProducto.save(function (err, productos) {
    if (err) res.send(err);
    res.json(productos);
  });
};

exports.leer_producto = function (req, res) {
  Productos.findById(req.params.productosId, function (err, productos) {
    if (err) res.send(err);
    res.json(productos);
  });
};

exports.actualizar_producto = function (req, res) {
  Productos.findByIdAndUpdate(
    { _id: req.params.productosId },
    req.body,
    { new: true },
    function (err, productos) {
      if (err) res.send(err);
      res.json(productos);
    }
  );
};

exports.eliminar_producto = function (req, res) {
  Productos.findByIdAndRemove(
    {
      _id: req.params.productosId,
    },
    function (err, productos) {
      if (err) res.send(err);
      res.json({ message: "Productos successfully deleted" });
    }
  );
};
