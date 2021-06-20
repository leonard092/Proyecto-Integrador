const express = require("express");
const router = express.Router();
const productsController = require ("./../controllers/productsController");


router.get("/producto", productsController.productos);

router.get("/crearProducto", productsController.crearProducto);

router.get("/detalleProducto", productsController.detalleProducto);

router.get("/editarProducto", productsController.editarProducto);

module.exports = router;