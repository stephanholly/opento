exports.up = function(knex, Promise) {
  return knex.schema.createTable('eventinvited', function(table) {
    table.increments();
    table.integer('eventid');
    table.integer('inviteeid');
    table.boolean('clicked');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('eventinvited');
};
