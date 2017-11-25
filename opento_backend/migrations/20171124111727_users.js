exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('username');
    table.string('firstName');
    table.string('lastName');
    table.string('password');
    table.string('email');
    table.string('picUrl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
