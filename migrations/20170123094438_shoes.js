
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', table =>  {
      table.increments();
      table.text('shoe_brand');
      table.boolean('is_new');
      table.integer('user_id').references('users.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('shoes')
};
