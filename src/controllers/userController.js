const userController = {

    registro: (req, res) => {
        res.render("Registro")
    },

    login: (req, res) => {
        res.render("login")
    }
    
};

module.exports = userController;