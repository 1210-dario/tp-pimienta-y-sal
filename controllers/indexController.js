const platos = require('../data/products/products');

module.exports = {

    index: (req, res) => {
        return res.render('index',{
            title : 'Home',
            platos
        })
    },
    detail : (req,res) => {

        let plato = platos.find(plato => plato.id === +req.params.id)

        return res.render('detalleMenu', {
            plato,
        })
    }
}