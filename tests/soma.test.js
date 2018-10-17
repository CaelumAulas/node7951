const soma = require('./soma')
const chai = require('chai')

describe('# soma.js', () => {
    it('Esperamos que 1 + 1 seja 2', () => {
        chai.expect(soma(1,1)).to.be.equal(2);
    })
    it('Esperamos que 2 + 2 seja 4', () => {
        chai.expect(soma(2,2)).to.be.equal(4);
    })
})


// Forma menos triste
// const assert = require('assert')
// assert.equal(soma(1,1), 2, 'Esperamos que 1 + 1 seja 2')
// assert.equal(soma(2,2), 4, 'Esperamos que 2 + 2 seja 4')


// Forma primordial do teste
// if(soma(1,1) === 2) {
//     console.log('Deu certo')
// } else {
//     console.log('Deu erro')
// }