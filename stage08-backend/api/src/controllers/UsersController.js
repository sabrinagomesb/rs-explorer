// ►►► um controller pode ter no máximo 5 funções/métodos:
// => index - GET p/ listar vários registros;
// => show - GET p/ exibir um registro específico;
// => create - POST p/ criar um registro;
// => update - PUT p/ atualizar um registro;
// => delete - DELETE p/ remover um registro.

const AppError = require("../utils/AppError")

class UsersController {
  create(request, response) {
    const { name, email, password } = request.body

    if(!name) {
      throw new AppError("Nome obrigatório")
    }

    response.status(201).json({name, email, password})
  }
}

module.exports = UsersController
