const app = require('./app')

app.listen(3000, function() {
    console.log('Servidor Subiu com Sucessinhos!')    
})







    // JSON no formato convencional de APIs
    // res.send({
    //     produtos: produtos
    // })

    // statement
        // for(produto of produtos) { console.log(produto) }
    // expressões 
        // produtos.forEach(function(produtoAtual) { return `<li>${produtoAtual}</li>` })
    
    // res.send(`
    //     <h1>Página de Produtos</h1>
    //     <ul>
    //         ${
    //             produtos.map(function(produtoAtual) {
    //                 return `<li>${produtoAtual}</li>`
    //             }).join(' ') 
    //         }
    //     </ul>
    // `)