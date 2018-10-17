// Objetivo: Fazer um site (sistema administrativo de livros)
// ES6 + ou JavaScript Moderno
const http = require('http') // Lib do HTTP

const rotas = []

function get(path, callback) {
    rotas[path] = callback
}
get('/', function(request,response) {
    response.end('Estou na home')
})
get('/produtos', function(request,response) {
    response.end('Estou nos produtos')
})


const server = http.createServer(function (request, response) { // Função Anônima
    console.log('Recebemos um request', request.url)

    if(rotas[request.url]) {
        rotas[request.url](request, response) 
    } else {
        response.writeHead(404)
        response.end('Pagina 404')
    }
})

const port = 3001
server.listen(port)



    // // home
    // if(request.url == '/') {
    //     response.end('Acessou a home')
    //     return;
    // }
    // // listagem de produtos
    // if(request.url == '/produtos') {
    //     response.end('Acessou produtos')
    //     return;
    // }
    // // 404
    // response.writeHead(404)
    // response.end('Pagina 404')