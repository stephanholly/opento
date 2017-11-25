
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('eventInvited').del()
    .then(function () {
      // Inserts seed entries
      return knex('eventInvited').insert([
        {eventID: 1, inviteeID: 2, clicked: true},
        {eventID: 1, inviteeID: 4, clicked: true},
        {eventID: 1, inviteeID: 5, clicked: true},
        {eventID: 1, inviteeID: 6, clicked: true},
        {eventID: 1, inviteeID: 7, clicked: true},
        {eventID: 1, inviteeID: 8, clicked: true},
        {eventID: 2, inviteeID: 2, clicked: false},
        {eventID: 2, inviteeID: 4, clicked: true},
        {eventID: 2, inviteeID: 6, clicked: true},
        {eventID: 2, inviteeID: 8, clicked: true},
        {eventID: 2, inviteeID: 10, clicked: true},
        {eventID: 3, inviteeID: 2, clicked: true},
        {eventID: 3, inviteeID: 3, clicked: true},
        {eventID: 3, inviteeID: 10, clicked: false},
        {eventID: 4, inviteeID: 1, clicked: true},
        {eventID: 4, inviteeID: 2, clicked: false},
        {eventID: 4, inviteeID: 7, clicked: false},
        {eventID: 5, inviteeID: 1, clicked: false},
        {eventID: 5, inviteeID: 5, clicked: false},
        {eventID: 5, inviteeID: 6, clicked: false},
        {eventID: 6, inviteeID: 3, clicked: true},
        {eventID: 6, inviteeID: 4, clicked: true},
        {eventID: 6, inviteeID: 8, clicked: true},
        {eventID: 6, inviteeID: 9, clicked: true},
        {eventID: 7, inviteeID: 6, clicked: true},
        {eventID: 7, inviteeID: 7, clicked: true},
        {eventID: 8, inviteeID: 1, clicked: true},
      ]);
    });
};
