exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('friendships', function(table){
      table.string('pending');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('friendships', function(table){
      table.dropColumn('pending');
    })
  ])
};
