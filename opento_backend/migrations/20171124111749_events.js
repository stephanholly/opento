exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments();
    table.timestamps(true, true);
    table.string('location');
    table.integer('clicks');
    table.integer('eventCreatorID');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
