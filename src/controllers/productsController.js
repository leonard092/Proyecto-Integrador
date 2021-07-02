const fs = require ("fs");
const path = require ("path");
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

    productos: (req, res) => {
        res.render("producto")
    },

    crearProducto: (req, res) => {
        res.render("crearProducto")
    },


    editarProducto: (req, res) => {
        res.render("editarProducto")
    },

    store: (req, res) => {

        let idNuevo = products[products.length-1].id + 1;
        let nuevoObjeto = Object.assign({id: idNuevo}, req.body);
        
        products.push(nuevoObjeto);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
        res.redirect("/");
    },

    edit: (req, res) => {
        let productoEditar = req.params.id;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id) {
                var productoEncontrado = products[i];
            }
        } 
        res.render("edit", {productoEnDetalle : productoEncontrado});
    },

    destroy: (req, res) => {
		res.render("destroy", productsFilePath)
	}
    
    
};

module.exports = productsController;



