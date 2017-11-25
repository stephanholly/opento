exports.up = function(knex, Promise) {
  return knex.schema.createTable('friendships', function(table) {
    table.increments();
    table.integer('friendID1');
    table.integer('friendID2');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friendships');
};
