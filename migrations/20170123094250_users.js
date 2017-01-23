
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table =>  {
      table.increments();
      table.text('first_name');
      table.text('last_name');
      table.text('email');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
