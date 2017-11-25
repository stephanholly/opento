
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {location: 'Santa Monica, CA', clicks: 6, eventCreatorID: 3},
        {location: 'San Francisco', clicks: 4, eventCreatorID: 1},
        {location: 'Venice Beach, CA', clicks: 2, eventCreatorID: 5},
        {location: 'Los Angeles, CA', clicks: 1, eventCreatorID: 6},
        {location: 'San Diego, CA', clicks: 0, eventCreatorID: 10},
        {location: 'Solana Beach, CA', clicks: 4, eventCreatorID: 7},
        {location: 'DTLA, CA', clicks: 2, eventCreatorID: 9},
        {location: 'Encinitas, CA', clicks: 1, eventCreatorID: 8},
      ]);
    });
};
