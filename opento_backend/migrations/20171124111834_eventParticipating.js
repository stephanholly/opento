exports.up = function(knex, Promise) {
  return knex.schema.createTable('eventParticipating', function(table) {
    table.increments();
    table.integer('eventID');
    table.integer('inviteeID');
    table.boolean('status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('eventParticipating');
};
