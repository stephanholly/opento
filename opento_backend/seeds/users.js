
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'stephanholly', firstName: 'Stephan', lastName: 'Holly', password: 'fewfew', email: 'steph.c.holly@gmail.com', picUrl: '../images/stephan.jpg', uid: 'ENleA9XBpxf26RhbEvOyF5r9eg92'},
        {username: 'krombopulos', firstName: 'Krombopulos', lastName: 'Michael', password: 'fewfew', email: 'krombopulos@gmail.com', picUrl: 'http://www.behindthevoiceactors.com/_img/chars/krombopulos-michael-rick-and-morty-5.77.jpg', uid: 'bCWfFIv6DCcZB6waGYVYjREtl4g1'},
        {username: 'jessica', firstName: 'Jessica', lastName: 'Unknown', password: 'fewfew', email: 'jessica@gmail.com', picUrl: 'http://www.behindthevoiceactors.com/_img/chars/jessica-rick-and-morty-99.jpg', uid: 't2Cl7EQmzMQL60qeYswvNkr1Gvt2'},
        {username: 'ricksanchez', firstName: 'Rick', lastName: 'Sanchez', password: 'fewfew', email: 'rick@gmail.com', picUrl: 'https://avatars1.githubusercontent.com/u/12981671?s=400&v=4', uid: 'kqD9p2vyjaNjNT95x9Tq9XPI66L2'},
        {username: 'mortysmith', firstName: 'Morty', lastName: 'Smith', password: 'fewfew', email: 'morty@gmail.com', picUrl: 'http://i.imgur.com/bk9Oo0S.png', uid: 'h76dw5nIK3e3E5y2ovyj9PH3PXq1'},
        {username: 'summersmith', firstName: 'Summer', lastName: 'Smith', password: 'fewfew', email: 'summer@gmail.com', picUrl: 'http://www.behindthevoiceactors.com/_img/chars/summer-rick-and-morty-65.7.jpg', uid: 'AZUIs989Coe4SzlaqoDwfT4vie32'},
        {username: 'jerrysmith', firstName: 'Jerry', lastName: 'Smith', password: 'fewfew', email: 'jerry@gmail.com', picUrl: 'https://vignette.wikia.nocookie.net/rickandmorty/images/4/46/Jerrypic.png/revision/latest?cb=20140129041526', uid: '8bQ1NSPwvaTGsF258fOSkIyPcXI3'},
        {username: 'bethsmith', firstName: 'Beth', lastName: 'Smith', password: 'fewfew', email: 'beth@gmail.com', picUrl: 'http://www.postavy.cz/foto/beth-smith-foto.jpg', uid: 'eLEmOa7ukSUwuLAYdxjfDicZIKv1'},
        {username: 'mrpoopybutthole', firstName: 'Bob', lastName: 'Poopybutthole', password: 'fewfew', email: 'mrpoopybutthole@gmail.com', picUrl: 'http://www.behindthevoiceactors.com/_img/chars/mr-poopybutthole-rick-and-morty-3.1.jpg', uid: 'bjfOHZZrntdDJeX3z6udKHJ3rh62'},
        {username: 'birdperson', firstName: 'Bird', lastName: 'Person', password: 'fewfew', email: 'birdperson@gmail.com', picUrl: 'http://www.behindthevoiceactors.com/_img/chars/birdperson-rick-and-morty-3.59.jpg', uid: 'ENexn7FWp5Por9LdW6tytUn4X3N2'}

      ]);
    });
};
