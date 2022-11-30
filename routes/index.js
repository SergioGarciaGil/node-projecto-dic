const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController')




module.exports = function () {

    router.post('/clientes', clienteController.nuevoCliente)

    return router
}