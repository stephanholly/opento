
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friendships').del()
    .then(function () {
      // Inserts seed entries
      return knex('friendships').insert([
        {friendID1: 1, friendID2: 2},
        {friendID1: 1, friendID2: 4},
        {friendID1: 1, friendID2: 6},
        {friendID1: 1, friendID2: 8},
        {friendID1: 1, friendID2: 10},
        {friendID1: 2, friendID2: 1},
        {friendID1: 2, friendID2: 3},
        {friendID1: 2, friendID2: 4},
        {friendID1: 2, friendID2: 5},
        {friendID1: 3, friendID2: 2},
        {friendID1: 3, friendID2: 4},
        {friendID1: 3, friendID2: 5},
        {friendID1: 3, friendID2: 6},
        {friendID1: 3, friendID2: 7},
        {friendID1: 3, friendID2: 8},
        {friendID1: 4, friendID2: 1},
        {friendID1: 4, friendID2: 2},
        {friendID1: 4, friendID2: 3},
        {friendID1: 4, friendID2: 7},
        {friendID1: 5, friendID2: 2},
        {friendID1: 5, friendID2: 3},
        {friendID1: 5, friendID2: 10},
        {friendID1: 6, friendID2: 1},
        {friendID1: 6, friendID2: 3},
        {friendID1: 6, friendID2: 9},
        {friendID1: 6, friendID2: 10},
        {friendID1: 7, friendID2: 3},
        {friendID1: 7, friendID2: 4},
        {friendID1: 7, friendID2: 8},
        {friendID1: 7, friendID2: 9},
        {friendID1: 8, friendID2: 1},
        {friendID1: 8, friendID2: 3},
        {friendID1: 8, friendID2: 7},
        {friendID1: 9, friendID2: 6},
        {friendID1: 9, friendID2: 7},
        {friendID1: 9, friendID2: 10},
        {friendID1: 10, friendID2: 1},
        {friendID1: 10, friendID2: 5},
        {friendID1: 10, friendID2: 6},
        {friendID1: 10, friendID2: 9},

      ]);
    });
};
