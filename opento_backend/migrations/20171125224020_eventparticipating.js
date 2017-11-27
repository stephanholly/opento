exports.up = function(knex, Promise) {
  return knex.schema.createTable('eventparticipating', function(table) {
    table.increments();
    table.integer('eventid');
    table.integer('inviteeid');
    table.boolean('status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('eventparticipating');
};
