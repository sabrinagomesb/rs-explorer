const { Router } = require("express") // importação

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router() // inicializa o Router que foi requerido na linha1

// function myMiddleware(request, response, next) {
//   console.log("Você passou pelo Middleware")
//   if(!request.body.isAdmin) {
//     return response.json( { message: "user unauthorized"})
//   }
//   next()
// }

const userController = new UsersController()

// usersRoutes.use(myMiddleware) // → aplica middleware para todas as rotas de usuário.
usersRoutes.post("/",userController.create) // add middleware em uma rota específica.
usersRoutes.put("/:id", userController.update)


module.exports = usersRoutes; // exportação
