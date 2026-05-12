const express = require('express')
const cors = require('cors')
const UserRoutes = require('./src/routes/UserRoutes.js')
const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))

// Primeira Rota
app.get('/', (request, response) => {
    return response.send("Olá ADS 2026.1")
})
// Importando Rotas de Usuários
app.use(UserRoutes)

// http://localhost:3000/

app.listen(3000, () => {
    console.log("Servidor Express executando...")
})