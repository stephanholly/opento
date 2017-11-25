exports.up = function(knex, Promise) {
  return knex.schema.createTable('eventInvited', function(table) {
    table.increments();
    table.integer('eventID');
    table.integer('inviteeID');
    table.boolean('clicked');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('eventInvited');
};
