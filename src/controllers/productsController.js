const productsController = {

    productos: (req, res) => {
        res.render("producto")
    },

    crearProducto: (req, res) => {
        res.render("crearProducto")
    },


    editarProducto: (req, res) => {
        res.render("editarProducto")
    }
    
};

module.exports = productsController;