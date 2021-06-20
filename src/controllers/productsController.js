const productsController = {

    productos: (req, res) => {
        res.render("producto")
    },

    crearProducto: (req, res) => {
        res.render("crearProducto")
    },

    detalleProducto: (req, res) => {
        res.render("detalleProducto")
    },

    editarProducto: (req, res) => {
        res.render("editarProducto")
    }
    
};

module.exports = productsController;