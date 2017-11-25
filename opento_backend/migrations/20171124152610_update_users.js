exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){
      table.string('uid');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', function(table){
      table.dropColumn('uid');
    })
  ])
};
