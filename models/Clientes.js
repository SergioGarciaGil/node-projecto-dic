const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true ///trim para cortar espacios automaticamrente en mongo
    },
    apellido: {
        type: String,
        trim: true
    },
    empresa: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,

    },
    email: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Clientes', clientesSchema)