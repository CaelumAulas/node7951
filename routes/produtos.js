const connectionFactory = require('../infra/connectionFactory')
const ProdutosDAO = require('../infra/ProdutosDAO')
const validator = require('fluent-validator');

module.exports = function(app) {
    app.get('/produtos/form', (req,res) => { res.render('produtos/form.ejs') })
    
    app.post('/produtos', function(req,res) {
        const livro = {
            titulo: req.body.titulo,
            preco: req.body.preco,
            descricao: req.body.descricao
        }
        const validation = validator()
            .validate(livro.titulo)
                .param('titulo')
                .passes(validator.isNotEmpty, 'O valor do texto não pode ser vazio')
            .validate(livro.preco)
                .param('preco')
                .passes(validator.isFloat, 'O valor do preco deve ser um float')
        if(validation.hasErrors()) {
            res.format({
                html: () => {
                    res.render('produtos/form.ejs', {
                        erros: validation.getErrors()
                    })
                },
                json: () => {
                    res.send({
                        erros: validation.getErrors()
                    })
                }
            })
            return;
        }
        // [Passo de salvar no banco]
        const connection = connectionFactory()
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.salvar(livro)
            .then(() => {
                res.redirect('/produtos')
            })
            .catch((error) => {
                res.send(error)
            })  
    })

    app.get('/produtos', function (req, res) {
        res.header('Access-Control-Allow-Origin', '*')

        const connectionFactory = require('../infra/connectionFactory')
        const connection = connectionFactory()
        const ProdutosDAO = require('../infra/ProdutosDAO')
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.pegaTodos()
            .then(function(results) {
                const produtos = results
                res.format({
                    html: () => {
                        res.render('produtos/lista.ejs', {
                            produtosNoLadoDaView: produtos
                        })
                    }, 
                    json: () => {
                        res.send({
                            livros: produtos
                        })
                    }
                })
                // curl -H "Accept: application/json"
                // http://localhost:3000/produtos
            })
    })

    // # Desafio: Listar um produto nessa url abaixo
    // http://localhost:3000/produtos/1
    app.get('/produtos/:id', function(req,res) {
        const idDoProduto = req.params.id
        const connectionFactory = require('../infra/connectionFactory')
        const connection = connectionFactory()
        const ProdutosDAO = require('../infra/ProdutosDAO')
        const produtosDAO = new ProdutosDAO(connection)

        produtosDAO.pegaPorId(idDoProduto, function(err, result) {
            res.send(result)
        })
    })
}


            // HTML dinâmico gerado no server
            // res.send({ // Exemplo mais simples da vida de APIs
            //     livros: produtos
            // })