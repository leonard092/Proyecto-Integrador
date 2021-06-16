const express = require( "express" );
const app = express ();
const path = require("path");

app.use(express.static (path.resolve (__dirname, "./public")));
app.use(express.static (path.resolve (__dirname, "./views")));


app.listen(3000, () =>
console.log("servidor corriendo"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home"))
});

app.get("/Registro", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/Registro.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/carrito.html"))
});

app.get("/Producto", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/Producto.html"))
});
