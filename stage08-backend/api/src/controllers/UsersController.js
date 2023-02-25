// ►►► um controller pode ter no máximo 5 funções/métodos:
// => index - GET p/ listar vários registros;
// => show - GET p/ exibir um registro específico;
// => create - POST p/ criar um registro;
// => update - PUT p/ atualizar um registro;
// => delete - DELETE p/ remover um registro.

const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()
    const checkUserExistis = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    )

    if (checkUserExistis) {
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await hash(password, 8)

    await database.run(
      "INSERT INTO users (name, email, password) VALUES  (?, ?, ?)",
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body
    const { id } = request.params

    const database = await sqliteConnection()
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    if (!user) {
      throw new AppError("Usuário não encontrado")
    }

    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    )

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso.")
    }

    user.name = name
    user.email = email

    if(password && !old_password){
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha.")
    }

    if(password && old_password){
      const checkOldPassword = await compare(old_password, user.password)

      if(!checkOldPassword){
        throw new AppError("A senha antiga não confere.")
      }

      user.password = await hash(password, 8)

    }

    await database.run(
      `
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      update_at = ?
      WHERE id = ?`,
      [user.name, user.email, user.password, new Date(), id]
    )

    return response.json()
  }
}

module.exports = UsersController
