class ProdutosDAO {
    constructor(connection) {
        this.connection = connection
    }
    pegaPorId (idDoProduto, callback) {
        this.connection.query(`SELECT * FROM livros WHERE id = ${idDoProduto}`, callback )
    }
    pegaTodos () {
        return new Promise((resolve, reject) => {// Arrow function
            this.connection.query('SELECT * FROM livros', function(err, results) {
                resolve(results)
            })
        })
    }

salvar (livro) {
    return new Promise((resolve, reject) => {
        this.connection.query(
            `INSERT INTO livros SET ?`, livro , function(err, results) {
                if(err) {
                    reject(err)
                }
                resolve(results)
            }
        )
    })
    // Dica: Muito parecido com o pegaTodos()
}
}
module.exports = ProdutosDAO

// module.exports = function(connection) {
//     return {
//         pegaPorId: function (idDoProduto, callback) {
//             connection.query(
//                 `SELECT * FROM livros WHERE id = ${idDoProduto}`,
//                 callback
//             )
//         },
//         pegaTodos: function() {
//             return new Promise(function(resolve, reject) {
//                 connection.query('SELECT * FROM livros', function(err, results) {
//                     resolve(results)
//                 })
//             })
//         }
//     }
// }