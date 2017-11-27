
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {location: 'Santa Monica, CA', clicks: 6, eventcreatorid: 3, eventcreatorname: 'jessica', active: true, creatorpic: 'https://i.imgur.com/40FDjZI.jpg'},
        {location: 'San Francisco', clicks: 4, eventcreatorid: 1, eventcreatorname: 'stephanholly', active: true, creatorpic: 'https://i.imgur.com/WsEHaPw.jpg'},
        {location: 'Venice Beach, CA', clicks: 2, eventcreatorid: 5, eventcreatorname: 'mortysmith', active: true, creatorpic: 'https://i.imgur.com/4hebgv8.png'},
        {location: 'Los Angeles, CA', clicks: 1, eventcreatorid: 6, eventcreatorname: 'summersmith', active: true, creatorpic: 'https://i.imgur.com/hyzPhTX.jpg'},
        {location: 'San Diego, CA', clicks: 0, eventcreatorid: 10, eventcreatorname: 'birdperson', active: true, creatorpic: 'https://i.imgur.com/6b3KPq5.jpg'},
        {location: 'Solana Beach, CA', clicks: 4, eventcreatorid: 7, eventcreatorname: 'jerrysmith', active: true, creatorpic: 'https://i.imgur.com/Eq9oPVO.png'},
        {location: 'DTLA, CA', clicks: 2, eventcreatorid: 9, eventcreatorname: 'mrpoopybutthole', active: true, creatorpic: 'https://i.imgur.com/zqbFtZ5.jpg'},
        {location: 'Encinitas, CA', clicks: 1, eventcreatorid: 8, eventcreatorname: 'bethsmith', active: true, creatorpic: 'https://i.imgur.com/wOJMDF7.png'},
      ]);
    });
};
