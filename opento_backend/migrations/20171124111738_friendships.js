exports.up = function(knex, Promise) {
  return knex.schema.createTable('friendships', function(table) {
    table.increments();
    table.integer('friendid1');
    table.integer('friendid2');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friendships');
};
