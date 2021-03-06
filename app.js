const express = require( "express" );
const app = express ();
const path = require("path");
const router = express.Router();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static (path.resolve (__dirname, "./public")));


homeRoutes = require("./src/routes/homeRoutes.js");
carritoRoutes = require("./src/routes/carritoRoutes.js");
productsRoutes = require("./src/routes/productsRoutes.js");
usersRoutes = require("./src/routes/usersRoutes.js");


//app.listen(3040, () =>
//console.log("servidor corriendo"));
app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor Corriendo")
});

app.use("/", homeRoutes);

app.use("/carrito", carritoRoutes);

app.use("/usuario", usersRoutes);

app.use("/producto", productsRoutes);










