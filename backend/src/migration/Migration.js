const conexao = require('../config/conexao.js')
const UserModel = require('../model/UserModel.js')
const ProductModel = require('../model/ProductModel.js')

conexao.sync({ force: false });

console.log('Migracao Realizada...');