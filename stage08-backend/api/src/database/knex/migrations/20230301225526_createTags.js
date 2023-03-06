exports.up = (knex) => knex.schema.createTable("tags", table => {
    table.increments("id")
    table.text("name").notNullable()
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE") // tag será deletada também quando a nota vinculada for apagada.
    table.integer("user_id").references("id").inTable("users")
  })

// processo de deletar tabela
exports.down = (knex) => knex.schema.dropTable("tags")
