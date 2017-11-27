
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.boolean('active');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.dropColumn('active');
    })
  ])
};
