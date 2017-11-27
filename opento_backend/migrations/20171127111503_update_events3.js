
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.string('creatorpic');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.dropColumn('creatorpic');
    })
  ])
};
