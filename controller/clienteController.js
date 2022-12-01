const { findByIdAndUpdate } = require('../models/Clientes');
const Clientes = require('../models/Clientes')


exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body)

    try {
        await cliente.save();
        res.json({ mensaje: 'se agrego un nuevo cliente' })

    } catch (error) {
        // si hay un error console log y next
        console.log(error)
        next()
    }
}
//mostrar todos los clientes que
exports.mostrarClientes = async (req, res, next) => {

    try {
        const clientes = await Clientes.find({})
        res.json(clientes)
    } catch (error) {
        console.log(error)
        next()
    }
}
//muestr un cliente por id
exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);
    if (!cliente) {
        res.json({ mensaje: 'Cliente con ese id no existe' })
        next()
    }
    //si todo esta bien mostramos el cliente 
    res.json(cliente)

}
//actualizarCliente
exports.actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({ _id: req.params.idCliente },
            req.body, {
            new: true  // le decimos que nos traiga el nuevo
        })
        res.send(cliente)
    } catch (error) {
        console.log(error)
        next()

    }
}

exports.eliminarCliente = async (req, res, next) => {
    try {
        await Clientes.findByIdAndDelete({ _id: req.params.idCliente })
        res.json({ mensaje: 'cliente Se elimino correctamente' })
    } catch (error) {
        console.log(error)
        next()

    }
}