const Pedidos = require("../models/Pedidos");
const Productos = require("../models/Productos");

exports.nuevoPedido = async (req, res, next) => {
    const pedidos = new Pedidos(req.body);
    try {
        await pedidos.save();
        res.json({ mensaje: "se agrego un nuevo pediodo" });
    } catch (error) {
        console.error(error);
        return next();
    }
};
exports.mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedidos.find({}).populate("cliente").populate({
            path: "pedido.producto",
            models: Productos,
        });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        return next();
    }
};
exports.mostrarPedido = async (req, res, next) => {
    const pedido = await Pedidos.findById(req.params.idPedido)
        .populate("cliente")
        .populate({ path: "pedido.producto", models: Productos });

    if (!pedido) {
        res.json({ mensaje: "pedido no existe" });
        return next();
    }
    res.json(pedido);
};

exports.actualizarPedido = async (req, res, next) => {
    try {
        const pedido = await Pedidos.findOneAndUpdate(
            { _id: req.params.idPedido },
            req.body,
            {
                new: true,
            }
        )
            .populate("cliente")
            .populate({
                path: "pedido.producto",
                models: "Productos",
            });
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
};
exports.eliminarPedido = async (req, res, next) => {
    try {
        const pedido = Pedidos.findByIdAndDelete({ _id: req.params.idPedido })
        res.json({ mensage: 'Pedido elimidano correctamente' })


    } catch (error) {
        console.log(error);
        next()
    }
}