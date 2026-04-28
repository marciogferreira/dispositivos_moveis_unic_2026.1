const UserModel = require("../model/UserModel");

class UserController {
    // Consulta todos os usuários
    static async findAll(request, response) {
        const data = await UserModel.findAll()
        return response.json(data)
    }

    // Consulta um usuário por ID
    static async findById(request, response) {
        const id = request.params.id
        const data = await UserModel.findByPk(id)
        return response.json(data)
    }

    static async create(request, response) {
        const body = request.body
        const data = await UserModel.create(body)
        return response.json({
            message: 'Usuário criado com sucesso',
        })
    }

    static async update(request, response) {
        const id = request.params.id
        const body = request.body
        const data = await UserModel.update(body, {
            where: { id }
        })
        return response.json({
            message: 'Usuário atualizado com sucesso',
            data: data
        })
    }

    static async delete(request, response) {
        const id = request.params.id
        await UserModel.destroy({
            where: { id }
        })
        return response.json({
            message: 'Usuário deletado com sucesso',
        })
    }
}

module.exports = UserController