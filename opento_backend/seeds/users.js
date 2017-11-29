
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'stephanholly', firstname: 'Stephan', lastname: 'Holly', password: 'fewfew', email: 'steph.c.holly@gmail.com', picurl: 'https://i.imgur.com/WsEHaPw.jpg', uid: 'ENleA9XBpxf26RhbEvOyF5r9eg92'},
        {username: 'krombopulos', firstname: 'Krombopulos', lastname: 'Michael', password: 'fewfew', email: 'krombopulos@gmail.com', picurl: 'https://i.imgur.com/XPZ22aq.jpg', uid: 'bCWfFIv6DCcZB6waGYVYjREtl4g1'},
        {username: 'jessica', firstname: 'Jessica', lastname: 'Unknown', password: 'fewfew', email: 'jessica@gmail.com', picurl: 'https://i.imgur.com/40FDjZI.jpg', uid: 't2Cl7EQmzMQL60qeYswvNkr1Gvt2'},
        {username: 'ricksanchez', firstname: 'Rick', lastname: 'Sanchez', password: 'fewfew', email: 'rick@gmail.com', picurl: 'https://i.imgur.com/LbI01LW.png', uid: 'kqD9p2vyjaNjNT95x9Tq9XPI66L2'},
        {username: 'mortysmith', firstname: 'Morty', lastname: 'Smith', password: 'fewfew', email: 'morty@gmail.com', picurl: 'https://i.imgur.com/4hebgv8.png', uid: 'h76dw5nIK3e3E5y2ovyj9PH3PXq1'},
        {username: 'summersmith', firstname: 'Summer', lastname: 'Smith', password: 'fewfew', email: 'summer@gmail.com', picurl: 'https://i.imgur.com/hyzPhTX.jpg', uid: 'AZUIs989Coe4SzlaqoDwfT4vie32'},
        {username: 'jerrysmith', firstname: 'Jerry', lastname: 'Smith', password: 'fewfew', email: 'jerry@gmail.com', picurl: 'https://i.imgur.com/Eq9oPVO.png', uid: '8bQ1NSPwvaTGsF258fOSkIyPcXI3'},
        {username: 'bethsmith', firstname: 'Beth', lastname: 'Smith', password: 'fewfew', email: 'beth@gmail.com', picurl: 'https://i.imgur.com/wOJMDF7.png', uid: 'eLEmOa7ukSUwuLAYdxjfDicZIKv1'},
        {username: 'picklerick', firstname: 'Pickle', lastname: 'Rick', password: 'fewfew', email: 'picklerick@gmail.com', picurl: 'https://i.imgur.com/PRtoBSx.jpg', uid: 'V0C56mMLxXVGxD07QNhdAY6jjYG3'},
        {username: 'birdperson', firstname: 'Bird', lastname: 'Person', password: 'fewfew', email: 'birdperson@gmail.com', picurl: 'https://i.imgur.com/6b3KPq5.jpg', uid: 'ENexn7FWp5Por9LdW6tytUn4X3N2'},
        {username: 'evilmorty', firstname: 'Evil', lastname: 'Morty', password: 'fewfew', email: 'evilmorty@gmail.com', picurl: 'https://i.imgur.com/YBMxwYR.jpg', uid: 'sEI5UXfTJVYNXh8IRGCkqSaDmAn1'}

      ]);
    });
};
