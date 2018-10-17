const request = require('supertest');
const { expect } = require('chai')
const app = require('../../app')
describe('# /produtos ', () => {
    it('deve retornar um array de livros', () => {
        request(app)
            .get('/produtos')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.body.livros).to.be.an('array')
            })      
    })
    it('deve inserir um livro e ser redirecionado para /produtos', (done) => {
        const livro = {
            "titulo": "Livro Construindo APIS",
            "preco": 10.90,
            "descricao": "Teste"
        }

        request(app)
            .post('/produtos')
            .send(livro)
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .end((err, res) => {
                expect(res.headers.location).to.be.equal('/produtos')
                done()
            })
    })
})