exports.up = knex => {
  knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', function (t) {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.timestamps(false, true)
      })
    }
  })
}
exports.down = knex => {
  return knex.schema.dropTableIfExists('user')
}
