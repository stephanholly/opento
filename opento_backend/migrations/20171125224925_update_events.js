exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.string('eventcreatorname');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('events', function(table){
      table.dropColumn('eventcreatorname');
    })
  ])
};
