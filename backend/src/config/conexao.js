const { Sequelize } = require('sequelize');

const conexao = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'ads26'
})

try {
    conexao.authenticate()
    console.log("Conexão com o banco de dados estabelecida com sucesso.")
} catch(error) {
    console.error("Erro ao conectar com o banco de dados:", error)
}

module.exports = conexao