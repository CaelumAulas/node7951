const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Recebemos uma conexão')
    socket.on('CLIENT_NOVA_MENSAGEM', (dadosDoClient) => {
        io.emit('SERVER_NOVA_MENSAGEM', dadosDoClient)
    })
})

app.get('/', (req,res) => {
    res.render('home.ejs')
})

const port = 3000
http.listen(port, () => {
    console.log(`Acesse em http://localhost:${port}`)
})
