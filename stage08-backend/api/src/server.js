require("express-async-errors") // importa lib

const migrationsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const express = require("express")

const routes  = require("./routes")
migrationsRun()

const app = express() // inicializa express
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }
  console.error(error)
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))



// diferença entre route params e query params = os parametros da ROUTE são obrigatórios. QUERY params tem os valores opcionais.

