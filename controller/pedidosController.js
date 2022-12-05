const Pedidos = require('../models/Pedidos')
const Productos = require('../models/Productos')

exports.nuevoPedido = async (req, res, next) => {
    const pedidos = new Pedidos(req.body)
    try {
        await pedidos.save()
        res.json({ mensaje: 'se agrego un nuevo pediodo' })
    } catch (error) {
        console.error(error)
        next()
    }
}
exports.mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({})
            .populate('cliente')
            .populate({
                path: 'pedido.producto',
                models: Productos
            })
        res.json(pedidos)
    } catch (error) {
        console.log(error)
        next()
    }
}
