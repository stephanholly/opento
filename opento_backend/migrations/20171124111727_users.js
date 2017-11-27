exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.string('firstname');
    table.string('lastname');
    table.string('password');
    table.string('email');
    table.string('picurl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
