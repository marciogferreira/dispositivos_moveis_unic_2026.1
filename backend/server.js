const { createServer } = require('node:http')
const UserController = require('./src/controllers/UserController.js')
const app = createServer(async (request, response, next) => {


    if(request.url === '/usuarios' && request.method === 'GET') {
        const data = await UserController.findAll()
        response.writeHead(200, {'Content-type': 'text/json'})
        return response.end(JSON.stringify(data))
    }

    if(request.url === '/criar-usuarios' && request.method === 'GET') {
        const data = await UserController.create({
            name: 'Jose Silva',
            login: 'jose.silva',
            password: 'senha123'
        })
        response.writeHead(200, {'Content-type': 'text/json'})
        return response.end(JSON.stringify(data))
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
