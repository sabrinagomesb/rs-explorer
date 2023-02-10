const express = require("express")

const routes  = require("./routes")

const app = express() // inicializa express
app.use(express.json())

app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))



// diferença entre route params e query params = os parametros da ROUTE são obrigatórios. QUERY params tem os valores opcionais.

