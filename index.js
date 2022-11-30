const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//conectar mongoose
mongoose.Promise = global.Promise;
mongoose.connect = ('mongodb+srv://udemy:<sergio2772>@node-practica.o1ou9yd.mongodb.net/test', {
    useNewUrlParser: true,
})

//crear servidor com

const app = express()

//habilitar body parsererror
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//rutas de la aap
app.use('/', routes())

//puerto
app.listen(5000)