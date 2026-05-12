const UserModel = require("../model/UserModel.js")


class AuthController {
    static async login(req, res) {
        const { login, senha } = req.body
        const user = await UserModel.findOne({
            where: {
                login: login,
                password: senha
            }
        })
        if(user) {
            return res.json(user)
        }
        return res.status(401).json({ message: "Credenciais inválidas" })
    }
}

module.exports = AuthController