exports.up = (knex) => knex.schema.createTable("links", table => {
    table.increments("id")
    table.text("url").notNullable()

    table
      .integer("note_id")
      .references("id")
      .inTable("notes")
      .onDelete("CASCADE") // tag será deletada também quando a nota vinculada for apagada.

    table.timestamp("created_at").default(knex.fn.now())
  })

// processo de deletar tabela
exports.down = (knex) => knex.schema.dropTable("links")
