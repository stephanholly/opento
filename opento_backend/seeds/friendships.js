
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friendships').del()
    .then(function () {
      // Inserts seed entries
      return knex('friendships').insert([
        {friendid1: 1, friendid2: 2, pending: false},
        {friendid1: 1, friendid2: 4, pending: false},
        {friendid1: 1, friendid2: 6, pending: false},
        {friendid1: 1, friendid2: 8, pending: false},
        {friendid1: 1, friendid2: 10, pending: false},
        {friendid1: 2, friendid2: 1, pending: false},
        {friendid1: 2, friendid2: 3, pending: false},
        {friendid1: 2, friendid2: 4, pending: false},
        {friendid1: 2, friendid2: 5, pending: false},
        {friendid1: 3, friendid2: 2, pending: false},
        {friendid1: 3, friendid2: 4, pending: false},
        {friendid1: 3, friendid2: 5, pending: false},
        {friendid1: 3, friendid2: 6, pending: false},
        {friendid1: 3, friendid2: 7, pending: false},
        {friendid1: 3, friendid2: 8, pending: false},
        {friendid1: 4, friendid2: 1, pending: false},
        {friendid1: 4, friendid2: 2, pending: false},
        {friendid1: 4, friendid2: 3, pending: false},
        {friendid1: 4, friendid2: 7, pending: false},
        {friendid1: 5, friendid2: 2, pending: false},
        {friendid1: 5, friendid2: 3, pending: false},
        {friendid1: 5, friendid2: 10, pending: false},
        {friendid1: 6, friendid2: 1, pending: false},
        {friendid1: 6, friendid2: 3, pending: false},
        {friendid1: 6, friendid2: 9, pending: false},
        {friendid1: 6, friendid2: 10, pending: false},
        {friendid1: 7, friendid2: 3, pending: false},
        {friendid1: 7, friendid2: 4, pending: false},
        {friendid1: 7, friendid2: 8, pending: false},
        {friendid1: 7, friendid2: 9, pending: false},
        {friendid1: 8, friendid2: 1, pending: false},
        {friendid1: 8, friendid2: 3, pending: false},
        {friendid1: 8, friendid2: 7, pending: false},
        {friendid1: 9, friendid2: 6, pending: false},
        {friendid1: 9, friendid2: 7, pending: false},
        {friendid1: 9, friendid2: 10, pending: false},
        {friendid1: 10, friendid2: 1, pending: false},
        {friendid1: 10, friendid2: 5, pending: false},
        {friendid1: 10, friendid2: 6, pending: false},
        {friendid1: 10, friendid2: 9, pending: false},

      ]);
    });
};
