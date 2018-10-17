const express = require('express')
const app = express()

// [MIDDLEWARES]
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))
// Cria uma rota GET para cada arquivo nessa pasta

// [ROTAS]
const rotaDaHome = require('./routes/home')
rotaDaHome(app)

const rotaDeProdutos = require('./routes/produtos')
rotaDeProdutos(app)

module.exports = app