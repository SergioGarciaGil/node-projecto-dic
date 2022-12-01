const Productos = require('../models/Productos')

//agrega nuevos productos

exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body)
    try {
        await producto.save()
        res.json({ mensaje: 'producto agregado correctamente' })
    } catch (error) {
        console.error(error)
        next()
    }
}
