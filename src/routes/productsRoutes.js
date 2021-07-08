const express = require("express");
const router = express.Router();
const productsController = require ("./../controllers/productsController");


router.get("/producto/:id", productsController.productos);

router.get("/crearProducto", productsController.crearProducto);

router.post("/crearProducto", productsController.store);

router.get("/editarProducto/:id", productsController.editarProducto);

router.put("/editarProducto/:id", productsController.edit);

router.delete('/:id', productsController.destroy); 




module.exports = router;