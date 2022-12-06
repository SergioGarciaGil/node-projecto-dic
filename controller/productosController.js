const Productos = require('../models/Productos')

//agrega nuevos productos

exports.nuevoProducto = async (req, res, next) => {
    const producto = new Productos(req.body)
    try {
        await producto.save()
        res.json({ mensaje: 'producto agregado correctamente' })
    } catch (error) {
        console.log(error)
        next()
    }
}

//mostrar productos

exports.mostrarProductos = async (req, res, next) => {
    try {
        const productos = await Productos.find({})
        res.json(productos)
    } catch (error) {
        console.log(error)
        next()

    }
}
exports.mostrarProducto = async (req, res, next) => {

    const producto = await Productos.findById(req.params.idProducto)
    if (!producto) {
        res.json({ mensaje: `producto con id  no existe` })
        return next()
    }
    res.json(producto)
}

exports.actualizarProducto = async (req, res, next) => {
    try {
        const producto = await Productos.findOneAndUpdate({ _id: req.params.idProducto },
            req.body, {
            new: true
        })
        res.json(producto)
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.eliminarProducto = async (req, res, next) => {
    try {
        const producto = await Productos.findByIdAndDelete({ _id: req.params.idProducto })
        res.json({ mensaje: 'Producto eliminado correctamente' })
        return producto

    } catch (error) {
        console.log(error)
        next()
    }
}