const express = require('express')
const app = express()

// [MIDDLEWARES]
const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('./public'))
// Cria uma rota GET para cada arquivo nessa pasta

// [ROTAS]
const rotaDaHome = require('./routes/home')
rotaDaHome(app)

const rotaDeProdutos = require('./routes/produtos')
rotaDeProdutos(app)

app.use((req, res) => {
    res.status(404)
    res.send('Você caiu na página 404')
})

// Diferenciando ambientes de execução!
// if(process.env.NODE_ENV === 'test') {
// }

module.exports = app