const { createServer } = require('node:http')
const conexao = require('./src/config/conexao.js')
const UserModel = require('./src/model/UserModel.js')

const app = createServer((request, response, next) => {

    if(request.url === '/criar-usuario') {
        
        UserModel.create({
            name: 'Marcio Ferreira',
            login: 'marcio.ferreira',
            password: '123456'
        })

        response.writeHead(200, {'Content-type': 'application/pdf'})
        return response.end('PDF')
    }

    if(request.url === '/imagem') {
        response.writeHead(200, {'Content-type': 'image/jpeg'})
        return response.end('IMAGEM')
    }

    response.writeHead(200, {'Content-type': 'text/html'})
    return response.end("Olá ADS 2026.1")
})

// http://localhost:3000
// http://localhost:3000/pdf
// http://localhost:3000/imagem
app.listen(3000, 'localhost', () => {
    console.log(" Servidor Node executando...ADS...")
})
